import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { contactList } from './contact-data';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public Contact = contactList;
  public getContacts(): Contact[] {
    return this.Contact;
  }
}
