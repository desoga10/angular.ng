import { inject, Injectable, NgZone } from '@angular/core';
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
      environment.supabaseKey
    );

    this.supabase_client.auth.onAuthStateChange((event, session) => {
      console.log('event', event);
      console.log('session', session);

      localStorage.setItem('session', JSON.stringify(session?.user));

      if (session?.user) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = localStorage.getItem('session') as string;
    console.log(user);
    return user === 'undefined' ? false : true;
  }

  //Register
  signUp(email: string, password: string): Promise<any> {
    return this.supabase_client.auth.signUp({
      email,
      password,
    });
  }

  //Login

  signIn(email: string, password: string): Promise<any> {
    return this.supabase_client.auth.signInWithPassword({
      email,
      password,
    });
  }

  //SignOut
  public signOut(): Promise<any> {
    return this.supabase_client.auth.signOut();
  }
}
