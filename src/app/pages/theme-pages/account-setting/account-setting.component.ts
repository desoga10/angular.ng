import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { TablerIconsModule } from 'angular-tabler-icons';
import { AccountSettingService } from './account-setting.service';
import { UsersAccountSettingData } from 'src/app/interface/api-response';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-account-setting',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    TablerIconsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './account-setting.component.html',
})
export class AppAccountSettingComponent {
  private countryService = inject(AccountSettingService);
  countryList: any[] = [];
  user = signal<UsersAccountSettingData[]>([]);
  userId = signal('');
  private fb = inject(FormBuilder);
  userForm!: FormGroup;

  constructor() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      full_name: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      phone_number: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.countryList = this.countryService.getCountries();
    this.listUserData();

    this.countryService.fetchCurrentUserSettings().then((res) => {
      if (res && res.length > 0) {
        const user = res[0];
        this.userForm.patchValue({
          username: user.username,
          full_name: user.full_name,
          address: user.address,
          country: user.country,
          phone_number: user['phone_number'],
        });
      }
    });
  }

  listUserData() {
    this.countryService
      .fetchCurrentUserSettings()
      .then((res: UsersAccountSettingData[] | null) => {
        if (res !== null) {
          this.user.set(res);
          this.userId.set(res[0].id || '');
        } else {
          alert('No user settings found');
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  updateUserData() {
    const userData: UsersAccountSettingData = {
      id: this.userId(),
      username: this.userForm.get('username')?.value,
      full_name: this.userForm.get('full_name')?.value,
      address: this.userForm.get('address')?.value,
      country: this.userForm.get('country')?.value,
      phone_number: this.userForm.get('phone_number')?.value,
    };

    this.countryService.updateUserSettings(userData).then(() => {
      this.listUserData();
    });
  }
}
