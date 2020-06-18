import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import {Contact} from '../model/model.contacts';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:Contact=new Contact();

  mode:number=1;
  constructor(public contactService:ContactsService) { }

  ngOnInit() {
  }

  saveContact() {
    this.contactService.ajoutContacts(this.contact)
      .subscribe(data=> {
       this.contact=data as any;
       this.mode=2;
      },error => {
        console.log(error)
        });
  }
}
