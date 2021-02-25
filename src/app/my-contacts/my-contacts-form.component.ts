import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Contact } from './contact-form.model';
import { ContactsService } from './contacts.service';

interface MaritalStatus {
  status: string
}

@Component({
  selector: 'app-my-contacts-form',
  templateUrl: './my-contacts-form.component.html',
  styleUrls: ['./my-contacts-form.component.css']
})

export class MyContactsFormComponent implements OnInit,OnDestroy {

  @ViewChild('f', { static: false }) contactForm: NgForm;
  showForm: boolean = false;

  maritalStatus: MaritalStatus[];
  selectedMaritalStatus: MaritalStatus;
  gender: string;
  contacts: Contact[];
  private contactSub: Subscription;


  constructor(private contactService: ContactsService) { 
    this.maritalStatus = [
      {status: 'Married'},
      {status: 'Single'},
      {status: 'Divorced'},
      {status: 'Widowed'}
  ];
  this.selectedMaritalStatus = this.maritalStatus[1];
  }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.contactSub = this.contactService.contactsChanged.subscribe((contacts: Contact[])=>{
      this.contacts = contacts;
    })
  }

  onCreateNewContact() {
    this.showForm = true
  }

  onSubmit(form: NgForm) {
    const newContact: Contact = form.value;
    newContact.maritalStatus = form.value.maritalStatus.status
    console.log(newContact)
    this.contactService.addNewContact(newContact);
    this.showForm =false;
  }

  clearInputs() {
    this.contactForm.reset();
    this.contactForm.form.patchValue({maritalStatus: this.maritalStatus[1]})
  }

  ngOnDestroy(): void {
    this.contactSub.unsubscribe();
  }

}
