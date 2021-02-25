import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact-form.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: Contact;

  constructor() { }

  ngOnInit(): void {
    console.log(this.contact)
  }

}
