import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ServiceinvoiceService {
  http = inject(HttpClient);
  private supabase!: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
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
}
