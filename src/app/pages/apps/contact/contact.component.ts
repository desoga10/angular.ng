import { Component, OnInit, Inject, Optional } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';

export interface ContactData {
  closeResult: string;
  contacts: Contact[];
  searchText: any;
  txtContactname: string;
  txtContactPost: string;
  txtContactadd: string;
  txtContactno: string;
  txtContactinstagram: string;
  txtContactlinkedin: string;
  txtContactfacebook: string;
}

@Component({
  templateUrl: './contact.component.html',
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
  ],
  standalone: true,
})
export class AppContactComponent implements OnInit {
  closeResult = '';
  contacts: Contact[] = [];

  searchText: any;
  txtContactname = '';
  txtContactPost = '';
  txtContactadd = '';
  txtContactno = '';
  txtContactinstagram = '';
  txtContactlinkedin = '';
  txtContactfacebook = '';

  constructor(
    public dialog: MatDialog,
    private contactService: ContactService
  ) {
    this.contacts = this.contactService.getContacts();
    //console.log(this.contacts);
  }

  openDialog(action: string, obj: any): void {
    obj.action = action;
    const dialogRef = this.dialog.open(AppContactDialogContentComponent, {
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Add') {
        this.addContact(result.data);
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.contacts = this.filter(filterValue);
  }

  filter(v: string): Contact[] {
    return this.contactService
      .getContacts()
      .filter(
        (x) => x.contactname.toLowerCase().indexOf(v.toLowerCase()) !== -1
      );
  }

  ngOnInit(): void {
    // this.contacts = [];
  }

  // tslint:disable-next-line - Disables all
  addContact(row_obj: ContactData): void {
    this.contacts.unshift({
      contactimg: 'assets/images/profile/user-1.jpg',
      contactname: row_obj.txtContactname,
      contactpost: row_obj.txtContactPost,
      contactadd: row_obj.txtContactadd,
      contactno: row_obj.txtContactno,
      contactinstagram: row_obj.txtContactinstagram,
      contactlinkedin: row_obj.txtContactlinkedin,
      contactfacebook: row_obj.txtContactfacebook,
    });
  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-dialog-content',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: 'contact-dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class AppContactDialogContentComponent {
  action: string;
  // tslint:disable-next-line - Disables all
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<AppContactDialogContentComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ContactData
  ) {
    // console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction(): void {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
