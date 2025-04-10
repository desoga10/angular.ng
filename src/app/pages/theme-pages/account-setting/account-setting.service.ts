import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import countries from '../../../../assets/json/countries.json';
import { environment } from '../../../../environments/environment.development';
import { UsersAccountSettingData } from 'src/app/interface/api-response';

@Injectable({
  providedIn: 'root',
})
export class AccountSettingService {
  private supabase!: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  getCountries(): string[] {
    return countries;
  }

  async fetchCurrentUserSettings(): Promise<UsersAccountSettingData[] | null> {
    try {
      const {
        data: { user },
        error,
      } = await this.supabase.auth.getUser();

      if (error || !user) {
        alert(error?.message || 'No user found');
        return null;
      }

      const { data, error: dataError } = await this.supabase
        .from('users')
        .select('*')
        .eq('id', user.id);

      if (dataError) {
        alert(dataError.message);
        return null;
      }

      return data;
    } catch (err) {
      throw err;
    }
  }

  async updateUserSettings(userData: UsersAccountSettingData) {
    try {
      const { data, error } = await this.supabase
        .from('users')
        .update(userData)
        .eq('id', userData.id);

      if (error) {
        alert(error.message);
      } else {
        alert('User settings updated successfully!');
      }
      return data;
    } catch (err) {
      throw err;
    }
  }
}
