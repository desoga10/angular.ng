import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [RouterModule, MaterialModule],
  templateUrl: './maintenance.component.html',
})
export class AppMaintenanceComponent {}
