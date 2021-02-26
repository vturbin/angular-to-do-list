import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contact } from './contact-form.model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contactsChanged = new Subject<Contact[]>();
  private contacts: Contact[] = [
    {
      address: 'Sälzerstr.',
      city: 'Essen, Ruhr',
      email: 'v.turbin@hotmail.com',
      firstname: 'Valentin',
      gender: 'Male',
      lastname: 'Turbins',
      maritalStatus: 'Single',
      phone: '+4915780904276',
      postalCode: '45143',
    }
  ];

  constructor() {}

  getContacts() {
    return this.contacts;
  }

  addNewContact(contact: Contact) {
    console.log(contact);
    this.contacts.push(contact);
    this.contactsChanged.next(this.contacts);
  }
}
