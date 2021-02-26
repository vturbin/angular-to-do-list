import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../contact-form.model';
import { ContactsService } from '../contacts.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


interface MaritalStatus {
  status: string
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit,OnDestroy {

  showForm: boolean = false;
  maritalStatus: MaritalStatus[];
  selectedMaritalStatus: MaritalStatus;
  gender: string;
  contacts: Contact[];
  private contactSub: Subscription;
  contactForm: FormGroup;


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
    this.initForm();
  }

  private initForm() {

    this.contactForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      maritalStatus: new FormControl(this.selectedMaritalStatus, Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  onCreateNewContact() {
    this.showForm = true
  }

  onSubmit() {
    const newContact: Contact = this.contactForm.value;
    newContact.maritalStatus = this.contactForm.value.maritalStatus.status
    // console.log(newContact)
    this.contactService.addNewContact(newContact);
    this.showForm =false;
  }

  clearInputs() {
    this.contactForm.reset();
    this.contactForm.patchValue({maritalStatus: this.maritalStatus[1]})
  }

  ngOnDestroy(): void {
    this.contactSub.unsubscribe();
  }

}
