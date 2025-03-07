import { Injectable } from '@angular/core';
import { Mailbox } from './email';
import { mailboxList } from './email-data';
import { User } from './user-data';

@Injectable({
  providedIn: 'root'
})

export class mailGlobalVariable {
  public page = 1;
  public pageSize = 5;
  public collectionSize = 0;

  public topLable = '';
  public mailList: Mailbox[] = [];
  public selectedMail: Mailbox | null = null;
  public selectedUser: User | any = null;

  public users: User[] = [];
  public inboxList: Mailbox[] = [];
  public sentList: Mailbox[] = [];
  public draftList: Mailbox[] = [];
  public spamList: Mailbox[] = [];
  public trashList: Mailbox[] = [];

  public isShow = false;
  addClass = true;
  inboxCount = 0;
  spamCount = 0;
  draftCount = 0;
  replyShow = false;

  type = '';

  global(): void {
    this.inboxCount = this.inboxList.filter(
      (inbox) => inbox.mailbox === 'Inbox' && inbox.seen === false,
    ).length;
    this.spamCount = this.spamList.length;
    this.draftCount = this.draftList.length;
  }
}

@Injectable({
  providedIn: 'root'
})

export class mailService {
  public getInbox(): Mailbox[] {
    return mailboxList.filter((mail) => mail.mailbox === 'Inbox');
  }
  public getSent(): Mailbox[] {
    return mailboxList.filter((mail) => mail.mailbox === 'Sent');
  }
  public getDraft(): Mailbox[] {
    return mailboxList.filter((mail) => mail.mailbox === 'Draft');
  }
  public getSpam(): Mailbox[] {
    return mailboxList.filter((mail) => mail.mailbox === 'Spam');
  }
  public getTrash(): Mailbox[] {
    return mailboxList.filter((mail) => mail.mailbox === 'Trash');
  }
}
