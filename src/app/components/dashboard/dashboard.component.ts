import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor() {
    if (inject(AuthService).isLoggedIn === false) {
      inject(Router).navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
