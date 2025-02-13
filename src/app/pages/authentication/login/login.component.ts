import { Component, inject } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private settings = inject(SettingsService);
  private router = inject(Router);

  options = this.settings.getOptions();
  msg = '';

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }
}
