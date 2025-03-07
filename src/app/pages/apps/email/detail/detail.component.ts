import { Component, OnInit } from '@angular/core';
import { getUser } from '../user-data';
import { mailGlobalVariable, mailService } from '../email.service';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maildetail',
  templateUrl: './detail.component.html',
  standalone: true,
  imports: [MaterialModule, TablerIconsModule, CommonModule],
})
export class DetailComponent {
  // tslint:disable-next-line: no-shadowed-variable
  constructor(
    public ms: mailGlobalVariable,
    public mailService: mailService,
    public router: Router
  ) {}

  labelClick(type: string): void {
    if (this.ms.selectedMail) {
      if (type === 'Personal') {
        if (this.ms.selectedMail.label.indexOf('Personal') === -1) {
          this.ms.selectedMail.label.push('Personal');
        } else {
          this.ms.selectedMail.label = this.ms.selectedMail.label.filter(
            (str: any) => str !== 'Personal'
          );
        }
      } else if (type === 'Work') {
        if (this.ms.selectedMail.label.indexOf('Work') === -1) {
          this.ms.selectedMail.label.push('Work');
        } else {
          this.ms.selectedMail.label = this.ms.selectedMail.label.filter(
            (str: any) => str !== 'Work'
          );
        }
      } else if (type === 'Payments') {
        if (this.ms.selectedMail.label.indexOf('Payments') === -1) {
          this.ms.selectedMail.label.push('Payments');
        } else {
          this.ms.selectedMail.label = this.ms.selectedMail.label.filter(
            (str: any) => str !== 'Payments'
          );
        }
      } else if (type === 'Accounts') {
        if (this.ms.selectedMail.label.indexOf('Accounts') === -1) {
          this.ms.selectedMail.label.push('Accounts');
        } else {
          this.ms.selectedMail.label = this.ms.selectedMail.label.filter(
            (str: any) => str !== 'Accounts'
          );
        }
      }
    }
  }

  ddlRemoveClick(st: string): void {
    if (this.ms.selectedMail) {
      if (st === 'Spam') {
        this.ms.selectedMail.mailbox = 'Spam';

        this.ms.spamList.push(this.ms.selectedMail);
        this.ms.selectedMail = null;
        this.resetCount();
      } else if (st === 'Trash') {
        this.ms.selectedMail.mailbox = 'Trash';
        this.ms.trashList.push(this.ms.selectedMail);
        this.ms.selectedMail = null;
        this.resetCount();
      } else if (st === 'Read') {
        if (this.ms.selectedMail.seen) {
          this.ms.selectedMail.seen = false;
          this.ms.global();
        } else if (!this.ms.selectedMail.seen) {
          this.ms.selectedMail.seen = true;
          this.ms.global();
        }
      }
    }
  }

  iconsClick(name: string): void {
    if (this.ms.selectedMail) {
      if (name === 'Star') {
        if (this.ms.selectedMail.filter.indexOf('Star') !== -1) {
          this.ms.selectedMail.filter = this.ms.selectedMail.filter.filter(
            (fil: any) => fil !== 'Star'
          );
        } else {
          this.ms.selectedMail.filter.push('Star');
        }
      }
      if (name === 'Important') {
        if (this.ms.selectedMail.filter.indexOf('Important') !== -1) {
          this.ms.selectedMail.filter = this.ms.selectedMail.filter.filter(
            (fil: any) => fil !== 'Important'
          );
        } else {
          this.ms.selectedMail.filter.push('Important');
        }
      }
    }
  }

  resetCount(): void {
    this.ms.inboxList = this.mailService.getInbox();
    this.ms.sentList = this.mailService.getSent();
    this.ms.draftList = this.mailService.getDraft();
    this.ms.spamList = this.mailService.getSpam();
    this.ms.trashList = this.mailService.getTrash();
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
    this.ms.type = 'inbox';
    this.ms.global();
  }

  reply(): void {
    this.ms.replyShow = true;
  }

  sendButtonClick(): void {
    this.ms.replyShow = false;
  }

  removeClass(): void {
    this.ms.addClass = false;
  }
}
