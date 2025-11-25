import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { UsersAccountSettingData } from 'src/app/interface/api-response';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({ providedIn: 'root' })
export class TaxService {


  private supabase = createClient(
    environment.supabaseUrl,
    environment.supabaseKey
  );
  /**
   * Calculate tax and grand total based on settings
   * @param amount - base amount of invoice
   * @param settings - user's tax settings (tax_rate)
   * @param enabled - whether tax should be applied
   * @returns object with taxAmount and grandTotal
   */
  calculate(
    baseTotal: number,
    settings: { tax_rate: number; tax_name?: string },
    enabled: boolean = true // tax_name optional
  ): { grandTotal: number; taxAmount: number } {
    const taxRate = enabled ?settings.tax_rate || 0 : 0 ;
    const taxAmount = (baseTotal * taxRate) / 100;
    const grandTotal = baseTotal + taxAmount;
  
    return { grandTotal, taxAmount };
  }

  /**
   * Optional helper if you just want tax amount
   */
  getTaxAmount(amount: number, settings: UsersAccountSettingData, enabled: boolean): number {
    return enabled ? (amount * (settings.tax_rate ?? 0)) / 100 : 0;
  }

  /**
   * Optional helper if you just want grand total
   */
  getGrandTotal(amount: number, settings: UsersAccountSettingData, enabled: boolean): number {
    return amount + this.getTaxAmount(amount, settings, enabled);
  }
  getUserTaxSettings(): Observable<{ tax_name: string; tax_rate: number; tax_enable: boolean }> {
    const promise = (async () => {
      const { data, error } = await this.supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user:', error);
        return { tax_name: 'VAT', tax_rate: 0, tax_enable: true }; // fallback
      };
  
      const userId = data.user?.id;
      if (!userId){
        console.warn('No logged-in user found.');
        return { tax_name: 'VAT', tax_rate: 0 , tax_enable: true}; // fallback
      }
  
      const { data: account, error: accountError } = await this.supabase
        .from('users')
        .select('tax_name, tax_rate, tax_enable')
        .eq('id', userId)
        .single();
  
        console.log("SUPABASE ACCOUNT:", account);   // <-- debug
        console.log("tax_enable =", account?.tax_enable);

      if (accountError){
        console.error('Error fetching account settings:', accountError);
        return { tax_name: 'VAT', tax_rate: 0,tax_enable: true  }; // fallback
      };
  
      return {
        tax_name: account?.tax_name ?? 'VAT',
        tax_rate: account?.tax_rate ?? 0,
        tax_enable: account?.tax_enable ?? true
        
      };
    })();
  
    return from(promise);
  }
  updateUserTaxEnabled(enabled: boolean) {
    const promise = (async () => {
      const { data: userData, error } = await this.supabase.auth.getUser();
      if (error || !userData.user) throw error ?? 'No user';
      const userId = userData.user.id;
  
      const { error: updateError } = await this.supabase
        .from('users')
        .update({ tax_enable: enabled })
        .eq('id', userId);
  
      if (updateError) throw updateError;
      return true;
    })();
    return from(promise);
  }

}
