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
import { TaxService } from 'src/app/services/tax.service';


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
  private taxService = inject(TaxService);
  userForm!: FormGroup;

  

  constructor() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      full_name: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      phone_number: ['', Validators.required],
      taxEnabled:[''],
      taxName: ['Tax'],
      taxRate: [0],
    });
  }

  ngOnInit() {
    this.countryList = this.countryService.getCountries();

    // ★ Wrap async data fetch in try/catch to prevent blank page
    (async () => {
      try {
        const res = await this.countryService.fetchCurrentUserSettings();
        if (res && res.length > 0) {
          const user = res[0];
          this.userForm.patchValue({
            username: user.username || '',
            full_name: user.full_name || '',
            address: user.address || '',
            country: user.country || '',
            phone_number: user.phone_number || '',
            taxName: user.tax_name || 'Tax',  // ★ map from snake_case to form
            taxRate: user.tax_rate || 0,      // ★ map from snake_case to form
            taxEnabled: user.tax_enable ?? true,               // ★ default on
          });

          this.user.set(res);
          this.userId.set(res[0].id || '');
        } else {
          console.warn('No user settings found, using defaults'); // ★ fallback
        }
      } catch (err) {
        console.error('Error fetching user settings:', err); // ★ log error
        // ★ fallback defaults to avoid blank page
        this.userForm.patchValue({
          username: '',
          full_name: '',
          address: '',
          country: '',
          phone_number: '',
          taxName: 'Tax',
          taxRate: 0,
          taxEnabled: true,
        });
      }
    })();

    // ★ Load user list safely
    this.listUserData();
  }

  listUserData() {
    this.countryService
    .fetchCurrentUserSettings()
    .then((res: UsersAccountSettingData[] | null) => {
      if (res !== null && res.length > 0) { // ★ check for null and empty
        this.user.set(res);
        this.userId.set(res[0].id || '');
      } else {
        console.warn('No user settings found'); // ★ don't break page
      }
    })
    .catch((err) => {
      console.error('Error fetching user data:', err); // ★ log instead of alert
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
      tax_name: this.userForm.get('taxName')?.value,
      tax_rate: this.userForm.get('taxRate')?.value,
      tax_enable: this.userForm.get('taxEnabled')?.value, 
    };
    


    this.countryService.updateUserSettings(userData).then(() => {
      this.listUserData();
    });
  }

  toggleTaxEnabled() {
    const enabled = this.userForm.get('taxEnabled')?.value ?? true;
    this.taxService.updateUserTaxEnabled(enabled).subscribe({
      next: () => console.log('Tax toggle updated in DB'),
      error: (err: any) => console.error('Failed to update tax toggle', err),
    });
  }




}
