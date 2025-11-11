import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  inject,
  effect,
  input,
  output,
} from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { MatDialog } from '@angular/material/dialog';
import { navItems } from '../sidebar/sidebar-data';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AuthService } from 'src/app/services/auth.service';

interface apps {
  id: number;
  icon: string;
  color: string;
  title: string;
  subtitle: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NgScrollbarModule,
    TablerIconsModule,
    MaterialModule,
  ],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  // Public properties
  public showToggle = input<boolean>(true);
  public toggleChecked = input<boolean>(false);
  public toggleMobileNav = output<void>();
  public toggleMobileFilterNav = output<void>();
  public toggleCollapsed = output<void>();

  private auth = inject(AuthService);
  private router = inject(Router);
  private core = inject(CoreService);

  showFiller = false;

  async logOut() {
    this.auth
      .signOut()
      .then(() => {
        this.router.navigate(['/landingpage']);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  constructor(public dialog: MatDialog) {
    effect(() => {
      console.log('Current user:', this.user());
    });
  }

  toggleTheme() {
    this.core.toggleTheme();
  }

  get currentTheme(): string {
    return this.core.getOptions().theme;
  }

  setDark() {
    this.core.toggleTheme();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppSearchDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  apps: apps[] = [
    {
      id: 1,
      icon: 'solar:cash-out-bold',
      color: 'primary',
      title: 'Currency Converter',
      subtitle: 'Convert currency in seconds',
      link: '/apps/converter',
    },
    {
      id: 2,
      icon: 'solar:bill-list-line-duotone',
      color: 'success',
      title: 'Invoice App',
      subtitle: 'Get latest invoice',
      link: '/apps/invoice',
    },
  ];

  user = this.auth.user;
}

@Component({
  selector: 'search-dialog',
  standalone: true,
  imports: [RouterModule, MaterialModule, TablerIconsModule, FormsModule],
  templateUrl: 'search-dialog.component.html',
})
export class AppSearchDialogComponent {
  public searchText: string = '';
  public navItems = navItems;

  navItemsData = navItems.filter((navitem) => navitem.displayName);

  // filtered = this.navItemsData.find((obj) => {
  //   return obj.displayName == this.searchinput;
  // });
}
