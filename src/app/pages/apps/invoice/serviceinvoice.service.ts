import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ServiceInvoiceService {
  http = inject(HttpClient);
  private supabase!: SupabaseClient;
  currencies: { code: string; name: string }[] = [];

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  getCurrencies(): Observable<{ code: string; name: string }[]> {
    return this.http.get<{ code: string; name: string }[]>(
      '../../../assets/json/currencies.json'
    );
  }

  async submitInvoiceWithItems(invoiceData: any) {
    const {
      data: { user },
      error: userError,
    } = await this.supabase.auth.getUser();

    if (userError || !user) throw new Error('User is not authenticated');

    const { item_details, ...invoiceFields } = invoiceData;

    const invoiceWithUser = {
      ...invoiceFields,
      user_id: user.id,
    };

    const { data: inserted, error } = await this.supabase
      .from('invoice')
      .insert(invoiceWithUser)
      .select('id');

    if (error) {
      alert('Invoice insert error:' + error.message);
      throw error;
    }

    const invoiceId = inserted?.[0]?.id;
    if (!invoiceId) throw new Error('No invoice ID returned');

    const user_id = user.id;

    const { error: itemError } = await this.supabase
      .from('invoice_items')
      .insert([
        {
          invoice_id: invoiceId,
          item_details: item_details,
          user_id: user_id, // 👈 required for RLS
        },
      ]);

    if (itemError) {
      throw itemError;
    }

    return { invoiceId };
  }

  async getAllInvoices() {
    const { data: invoices, error: invoiceError } = await this.supabase
      .from('invoice')
      .select('*')
      .order('id', { ascending: false });

    if (invoiceError) throw invoiceError;

    const { data: invoiceItems, error: itemsError } = await this.supabase
      .from('invoice_items')
      .select('invoice_id, item_details');

    if (itemsError) throw itemsError;

    console.log('Invoice items from DB:', invoiceItems);

    const merged = invoices.map((invoice: any) => {
      const matching = invoiceItems.find((item: any) => {
        return Number(item.invoice_id) === Number(invoice.id);
      });

      return {
        ...invoice,
        items: matching?.item_details || [],
      };
    });
    return merged;
  }

  async getInvoiceById(id: number) {
    const { data: invoice, error: invoiceError } = await this.supabase
      .from('invoice')
      .select('*')
      .eq('id', id)
      .single();

    if (invoiceError) throw invoiceError;

    const { data: itemRow, error: itemsError } = await this.supabase
      .from('invoice_items')
      .select('item_details')
      .eq('invoice_id', id)
      .single();

    if (itemsError) throw itemsError;

    return {
      ...invoice,
      items: itemRow?.item_details || [],
    };
  }

  async getUserInvoices() {
    const {
      data: { user },
      error: userError,
    } = await this.supabase.auth.getUser();

    if (userError || !user) throw userError || new Error('User not found');

    const { data: invoices, error } = await this.supabase
      .from('invoice')
      .select('*')
      .eq('user_id', user.id)
      .order('id', { ascending: false });

    if (error) throw error;

    return invoices;
  }

  async deleteInvoice(id: string) {
    // Delete related invoice_items first
    const { error: itemsError } = await this.supabase
      .from('invoice_items')
      .delete()
      .eq('invoice_id', id);

    if (itemsError) return { error: itemsError };

    // Then delete the main invoice
    const { error: invoiceError } = await this.supabase
      .from('invoice')
      .delete()
      .eq('id', id);

    return { error: invoiceError };
  }
}
