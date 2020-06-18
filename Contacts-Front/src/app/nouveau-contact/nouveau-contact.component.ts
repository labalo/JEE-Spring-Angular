import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactsService:ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm) {
    this.contactsService.ajoutContacts(dataForm)
      .subscribe(data=> {
        console.log(data);
      },error=>{
        console.log(JSON.parse(error._body).message);
      })
}
}
