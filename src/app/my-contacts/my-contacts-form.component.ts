import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactForm } from './contact-form.model';

interface MaritalStatus {
  status: string
}

@Component({
  selector: 'app-my-contacts-form',
  templateUrl: './my-contacts-form.component.html',
  styleUrls: ['./my-contacts-form.component.css']
})

export class MyContactsFormComponent implements OnInit {

  @ViewChild('f', { static: false }) contactForm: NgForm;
  showForm: boolean = false;

  maritalStatus: MaritalStatus[];
  selectedMaritalStatus: MaritalStatus;
  gender: string;
  submittedContact: ContactForm;


  constructor() { 
    this.maritalStatus = [
      {status: 'Married'},
      {status: 'Single'},
      {status: 'Divorced'},
      {status: 'Widowed'}
  ];
  this.selectedMaritalStatus = this.maritalStatus[1];
  }

  ngOnInit(): void {
  }

  onCreateNewContact() {
    this.showForm = true
  }

  onSubmit(form: NgForm) {
    this.submittedContact = form.value;
    this.submittedContact.maritalStatus = form.value.maritalStatus.status
  }

  clearInputs() {
    this.contactForm.reset();
    this.contactForm.form.patchValue({maritalStatus: this.maritalStatus[1]})
  }

}
