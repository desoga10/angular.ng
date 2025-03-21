import { inject, Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase_client!: SupabaseClient;
  private router = inject(Router);
  // private _ngZone = inject(NgZone);

  constructor() {
    this.supabase_client = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,
      {
        auth: {
          persistSession: true, // Ensure sessions are saved
          autoRefreshToken: true, // Auto-refresh expired tokens
          detectSessionInUrl: true, // Detect OAuth callback
        },
      }
    );

    this.supabase_client.auth.onAuthStateChange((event, session) => {
      localStorage.setItem('session', JSON.stringify(session?.user));

      if (session?.user) {
        this.router.navigate(['apps/converter']);
      }
    });
  }

  async handleOAuthCallback() {
    // Process OAuth callback from URL
    const { data, error } = await this.supabase_client.auth.getSession();

    if (data.session?.user) {
      this.router.navigate(['apps/converter']); // Redirect on success
    } else if (error) {
      alert('Error retrieving session: ' + error.message);
      this.router.navigate(['/landingpage']);
    }
  }

  async getSession() {
    const { data } = await this.supabase_client.auth.getSession();
    return data.session;
  }

  get isLoggedIn(): boolean {
    const user = localStorage.getItem('session') as string;
    return user === 'undefined' ? false : true;
  }

  //Register
  signUp(email: string, password: string, username: string): Promise<any> {
    return this.supabase_client.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });
  }

  //Login

  signIn(email: string, password: string): Promise<any> {
    return this.supabase_client.auth.signInWithPassword({
      email,
      password,
    });
  }

  //Google Sign up
  async signInWithGoogle() {
    const { data, error } = await this.supabase_client.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      alert('Error during Google Sign-In: ' + error.message);
    }

    return data;
  }

  //SignOut
  public signOut(): Promise<any> {
    return this.supabase_client.auth.signOut();
  }
}
