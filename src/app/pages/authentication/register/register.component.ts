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
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  form = new FormGroup({
    uname: new FormControl('', [Validators.required]),
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

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);

    this.auth
      .signUp(
        this.form.value.email as string,
        this.form.value.password as string
      )
      .then((res) => {
        console.log(res.data.user.role);
        if (res.data.user.role === 'authenticated') {
          this.router.navigate(['/dashboard']);
        }
      })
      .catch((err) => {
        alert('error signing up');
        console.log(err);
      });
  }
}
