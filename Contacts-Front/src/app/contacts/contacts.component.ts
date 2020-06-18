import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ContactsService} from '../../services/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../model/model.contacts';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private pageContacts;
  motcle:string="";
  currentpage:number=0;
  size:number=3;
  pages:Array<number>;

  constructor(private http:HttpClient,public contactsService:ContactsService,public router:Router) { }

  ngOnInit() {

  }

  doSearch(){
    this.contactsService.getContacts(this.motcle,this.currentpage,this.size)
      .subscribe(data=> {
        this.pageContacts = data;
        this.pages=new Array();
      },err => {

        console.log(err);
      })
  }

  chercher() {
    this.doSearch();
  }

  nextPage(i: number) {
  this.currentpage=i;
  this.doSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(['editContact',id]);
  }

  onDeleteContact(c: Contact) {
    let confirm = window.confirm("etes vous sur de supprimer l'élement");
    if (confirm == true) {
      this.contactsService.deleteContacts(c.id)
        .subscribe(data => {
          this.pageContacts.content.splice(
            this.pageContacts.content.indexOf(c), 1
          );
        }, error => {
          console.log(error);
        })
    }
  }

}
