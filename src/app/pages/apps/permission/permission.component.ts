import { CommonModule } from '@angular/common';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss'],
  standalone: true,
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule, MatButtonToggleModule],
  providers: [],
})
export class AppPermissionComponent implements OnInit {
  currentRole!: string;

  currentPermissions!: string[];

  permissionsOfRole: any = {
    ADMIN: ['canAdd', 'canDelete', 'canEdit', 'canRead'],
    MANAGER: ['canAdd', 'canEdit', 'canRead'],
    GUEST: ['canRead'],
  };

  private readonly _destroy$ = new Subject<void>();

  constructor(
    private rolesSrv: NgxRolesService,
    private permissionsSrv: NgxPermissionsService
  ) {}

  ngOnInit(): void {
    this.currentRole = 'ADMIN';
    this.currentPermissions = ['canAdd', 'canDelete', 'canEdit', 'canRead'];
  }

  onPermissionChange() {
    this.currentPermissions = this.permissionsOfRole[this.currentRole];
    this.rolesSrv.flushRolesAndPermissions();
    this.rolesSrv.addRoleWithPermissions(
      this.currentRole,
      this.currentPermissions
    );
  }
}
