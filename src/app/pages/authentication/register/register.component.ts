import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  errorMessage: string | null = null;

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]),
  });

  ngOnInit() {
    // Handle OAuth callback once the app loads
    this.auth.handleOAuthCallback();
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.auth
      .signUp(
        this.form.value.email as string,
        this.form.value.password as string,
        this.form.value.username as string
      )
      .then((res) => {
        if (res.data.user.role === 'authenticated') {
          this.router.navigate(['/']);
        }
      })
      .catch((err) => {
        this.errorMessage = err;
      });
  }

  async handleAuth() {
    await this.auth.signInWithGoogle();
  }
}
