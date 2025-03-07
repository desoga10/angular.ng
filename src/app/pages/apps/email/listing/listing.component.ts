import { Component, OnInit, Inject } from '@angular/core';
import { Category, mailbox, filter, label } from './categories';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { mailGlobalVariable, mailService } from '../email.service';
import { getUser } from '../user-data';

import { mailboxList } from '../email-data';

import { Mailbox } from '../email';
import { Router } from '@angular/router';

import {
  AngularEditorConfig,
  AngularEditorModule,
} from '@kolkov/angular-editor';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TablerIconsModule } from 'angular-tabler-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailComponent } from '../detail/detail.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';

@Component({
  selector: 'app-dialog-data-example-dialog',
  templateUrl: 'compose-dialog-content.html',
  standalone: true,
  imports: [
    MaterialModule,
    AngularEditorModule,
    FormsModule,
    NgxMatFileInputModule,
    ReactiveFormsModule,
  ],
})
export class ListingDialogDataExampleDialogComponent {
  form: UntypedFormGroup;

  
  fileControl: FormControl;


  htmlContent1 = '';

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '9rem',
    maxHeight: '20rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      signature: ['', Validators.required],
    });
    console.log(this.htmlContent1);
  }

  onChange(event: any) {
    console.log('changed');
  }

  onBlur(event: any) {
    console.log('blur ' + event);
  }
}

@Component({
  selector: 'app-listing',
  standalone: true,
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  imports: [
    MaterialModule,
    CommonModule,
    NgScrollbarModule,
    TablerIconsModule,
    NgxPaginationModule,
    DetailComponent,
    NgxMatFileInputModule
  ],
})
export class ListingComponent implements OnInit {
  searchText: string = '';

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: 960px)`);

  sidePanelOpened = true;
  displayMode = 'default';
  p = 1;
  mailboxes: Category[] = mailbox;
  filters: Category[] = filter;
  labels: Category[] = label;
  selectedIndex: string;
  constructor(
    public ms: mailGlobalVariable,
    // tslint:disable-next-line: no-shadowed-variable
    public mailService: mailService,
    public router: Router,

    public dialog: MatDialog
  ) {
    if (
      this.ms.type === null ||
      this.ms.type === '' ||
      this.ms.type === undefined
    ) {
      this.router.navigate(['apps/email/inbox']);
    }

    this.ms.type = 'inbox';
  }

  isOver(): boolean {
    return this.mediaMatcher.matches;
  }

  ngOnInit(): void {
    this.ms.inboxList = this.mailService.getInbox();
    this.ms.sentList = this.mailService.getSent();
    this.ms.draftList = this.mailService.getDraft();
    this.ms.spamList = this.mailService.getSpam();
    this.ms.trashList = this.mailService.getTrash();

    this.ms.mailList = this.ms.inboxList;
    this.ms.collectionSize = this.ms.mailList.length;

    for (const mail of this.ms.inboxList) {
      const User = getUser(mail.fromId);
      if (User !== null) {
        this.ms.users.push(User);
      }
    }

    this.ms.topLable = 'Inbox';
    this.ms.global();
  }

  mailSelected(mail: Mailbox): void {
    this.ms.selectedMail = null;
    this.ms.selectedMail = mail;
    this.selectedIndex = mail.MailId;
    this.ms.selectedMail.seen = true;
    mail.seen = true;
    this.ms.addClass = true;
    this.ms.selectedUser = getUser(mail.fromId);

    this.ms.global();

    if (this.ms.type === 'inbox') {
      this.router.navigate(['apps/email/inbox', mail.MailId]);
    }

    if (this.ms.type === 'sent') {
      this.router.navigate(['apps/email/sent', mail.MailId]);
    }

    if (this.ms.type === 'draft') {
      this.router.navigate(['apps/email/draft', mail.MailId]);
    }

    if (this.ms.type === 'spam') {
      this.router.navigate(['apps/email/spam', mail.MailId]);
    }

    if (this.ms.type === 'trash') {
      this.router.navigate(['apps/email/trash', mail.MailId]);
    }

    if (this.ms.type === 'star') {
      this.router.navigate(['apps/email/star', mail.MailId]);
    }

    if (this.ms.type === 'important') {
      this.router.navigate(['apps/email/important', mail.MailId]);
    }

    if (this.ms.type === 'Personal') {
      this.router.navigate(['apps/email/personal', mail.MailId]);
    }

    if (this.ms.type === 'Work') {
      this.router.navigate(['apps/email/work', mail.MailId]);
    }

    if (this.ms.type === 'Payments') {
      this.router.navigate(['apps/email/payments', mail.MailId]);
    }

    if (this.ms.type === 'Accounts') {
      this.router.navigate(['apps/email/accounts', mail.MailId]);
    }
  }

  // tslint:disable-next-line: typedef
  mailboxesChanged(type: string): void {
    if (type === 'Inbox') {
      this.ms.mailList = this.ms.inboxList;
      this.ms.users = [];
      for (const mail of this.ms.mailList) {
        const User = getUser(mail.fromId);
        if (User !== null) {
          this.ms.users.push(User);
        }
      }
      this.ms.collectionSize = this.ms.inboxList.length;
      this.ms.selectedMail = null;
      this.ms.topLable = 'Inbox';
      this.mailActiveClass(type);
      this.ms.type = 'inbox';
      this.router.navigate(['apps/email/inbox']);
    } else if (type === 'Sent') {
      this.ms.mailList = this.ms.sentList;
      this.ms.users = [];
      for (const mail of this.ms.mailList) {
        const User = getUser(mail.fromId);
        if (User !== null) {
          this.ms.users.push(User);
        }
      }
      this.ms.collectionSize = this.ms.sentList.length;
      this.ms.selectedMail = null;
      this.ms.topLable = 'Sent';
      this.mailActiveClass(type);
      this.ms.type = 'sent';
      this.router.navigate(['apps/email/sent']);
    } else if (type === 'Draft') {
      this.ms.mailList = this.ms.draftList;
      this.ms.users = [];
      for (const mail of this.ms.mailList) {
        const User = getUser(mail.fromId);
        if (User !== null) {
          this.ms.users.push(User);
        }
      }
      this.ms.collectionSize = this.ms.draftList.length;
      this.ms.selectedMail = null;
      this.ms.topLable = 'Draft';
      this.mailActiveClass(type);
      this.ms.type = 'draft';
      this.router.navigate(['apps/email/draft']);
    } else if (type === 'Spam') {
      this.ms.mailList = this.ms.spamList;
      this.ms.users = [];
      for (const mail of this.ms.mailList) {
        const User = getUser(mail.fromId);
        if (User !== null) {
          this.ms.users.push(User);
        }
      }
      this.ms.collectionSize = this.ms.spamList.length;
      this.ms.selectedMail = null;
      this.ms.topLable = 'Spam';
      this.mailActiveClass(type);
      this.ms.type = 'spam';
      this.router.navigate(['apps/email/spam']);
    } else if (type === 'Trash') {
      this.ms.mailList = this.ms.trashList;
      this.ms.users = [];
      for (const mail of this.ms.mailList) {
        const User = getUser(mail.fromId);
        if (User !== null) {
          this.ms.users.push(User);
        }
      }
      this.ms.collectionSize = this.ms.trashList.length;
      this.ms.selectedMail = null;
      this.ms.topLable = 'Trash';
      this.mailActiveClass(type);
      this.ms.type = 'trash';
      this.router.navigate(['apps/email/trash']);
    }
  }

  mailActiveClass(type: string): void {
    for (const fil of filter) {
      fil.active = false;
    }

    for (const lab of label) {
      lab.active = false;
    }

    for (const mail of mailbox) {
      mail.active = false;
    }
    // tslint:disable-next-line: no-non-null-assertion
    mailbox.find((m) => m.name === type)!.active = true;
  }

  filtersClick(type: string): void {
    if (type === 'Star') {
      this.ms.mailList = [];

      for (const mail of mailboxList) {
        for (const fil of mail.filter) {
          if (fil === 'Star') {
            this.ms.mailList.push(mail);
          }
        }
      }
      this.ms.users = [];
      for (const mail of this.ms.mailList) {
        const User = getUser(mail.fromId);
        if (User !== null) {
          this.ms.users.push(User);
        }
      }
      this.ms.collectionSize = this.ms.mailList.length;
      this.ms.topLable = 'Starred';
      this.ms.selectedMail = null;

      this.filterActiveClass(type);
      this.ms.type = 'star';
      this.router.navigate(['apps/email/star']);
    } else if (type === 'Important') {
      this.ms.mailList = [];

      for (const mail of mailboxList) {
        for (const fil of mail.filter) {
          if (fil === 'Important') {
            this.ms.mailList.push(mail);
          }
        }
      }
      this.ms.users = [];
      for (const mail of this.ms.mailList) {
        const User = getUser(mail.fromId);
        if (User !== null) {
          this.ms.users.push(User);
        }
      }
      this.ms.collectionSize = this.ms.mailList.length;
      this.ms.topLable = 'Important';
      this.ms.selectedMail = null;
      this.filterActiveClass(type);
      this.ms.type = 'important';
      this.router.navigate(['apps/email/important']);
    }
  }

  filterActiveClass(type: string): void {
    for (const fil of filter) {
      fil.active = false;
    }

    for (const lab of label) {
      lab.active = false;
    }

    for (const mail of mailbox) {
      mail.active = false;
    }
    // tslint:disable-next-line: no-non-null-assertion
    filter.find((fil) => fil.name === type)!.active = true;
  }

  labelChange(type: string): void {
    if (type === 'Personal') {
      this.ms.mailList = [];

      for (const mail of mailboxList) {
        // tslint:disable-next-line: no-shadowed-variable
        for (const label of mail.label) {
          if (label === 'Personal') {
            this.ms.mailList.push(mail);
          }
        }
      }

      this.ms.users = [];
      for (const mail of this.ms.mailList) {
        const User = getUser(mail.fromId);
        if (User !== null) {
          this.ms.users.push(User);
        }
      }
      this.labelActiveClass(type);
      this.ms.collectionSize = this.ms.mailList.length;
      this.ms.selectedMail = null;
      this.ms.topLable = 'Personal';
      this.ms.type = 'Personal';
      this.router.navigate(['apps/email/personal']);
    } else if (type === 'Work') {
      this.ms.mailList = [];

      for (const mail of mailboxList) {
        // tslint:disable-next-line: no-shadowed-variable
        for (const label of mail.label) {
          if (label === 'Work') {
            this.ms.mailList.push(mail);
          }
        }
      }

      this.ms.users = [];
      for (const mail of this.ms.mailList) {
        const User = getUser(mail.fromId);
        if (User !== null) {
          this.ms.users.push(User);
        }
      }

      this.ms.collectionSize = this.ms.mailList.length;
      this.ms.selectedMail = null;
      this.ms.topLable = 'Work';
      this.labelActiveClass(type);
      this.ms.type = 'Work';
      this.router.navigate(['apps/email/work']);
    } else if (type === 'Payments') {
      this.ms.mailList = [];

      for (const mail of mailboxList) {
        // tslint:disable-next-line: no-shadowed-variable
        for (const label of mail.label) {
          if (label === 'Payments') {
            this.ms.mailList.push(mail);
          }
        }
      }

      this.ms.users = [];
      for (const mail of this.ms.mailList) {
        const User = getUser(mail.fromId);
        if (User !== null) {
          this.ms.users.push(User);
        }
      }

      this.ms.collectionSize = this.ms.mailList.length;
      this.ms.selectedMail = null;
      this.ms.topLable = 'Payments';
      this.labelActiveClass(type);
      this.ms.type = 'Payments';
      this.router.navigate(['apps/email/payments']);
    } else if (type === 'Accounts') {
      this.ms.mailList = [];

      for (const mail of mailboxList) {
        // tslint:disable-next-line: no-shadowed-variable
        for (const label of mail.label) {
          if (label === 'Accounts') {
            this.ms.mailList.push(mail);
          }
        }
      }

      this.ms.users = [];
      for (const mail of this.ms.mailList) {
        const User = getUser(mail.fromId);
        if (User !== null) {
          this.ms.users.push(User);
        }
      }

      this.ms.collectionSize = this.ms.mailList.length;
      this.ms.selectedMail = null;
      this.ms.topLable = 'Accounts';
      this.labelActiveClass(type);
      this.ms.type = 'Accounts';
      this.router.navigate(['apps/email/accounts']);
    } else if (type === 'Forums') {
    }
  }

  labelActiveClass(type: string): void {
    for (const fil of filter) {
      fil.active = false;
    }

    for (const lab of label) {
      lab.active = false;
    }

    for (const mail of mailbox) {
      mail.active = false;
    }

    if (label !== undefined) {
      // tslint:disable-next-line: no-non-null-assertion
      label.find((l) => l.name === type)!.active = true;
    }
  }

  // Compose button
  openDialog(): void {
    const dialogRef = this.dialog.open(
      ListingDialogDataExampleDialogComponent,
      {}
    );
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
