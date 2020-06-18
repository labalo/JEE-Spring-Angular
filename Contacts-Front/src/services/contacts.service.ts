import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Contact} from '../app/model/model.contacts';

@Injectable()
export class ContactsService {

  constructor(public http:HttpClient) {
  }

  getContacts(motcle:string,page:number,size:number){
    return this.http.get("http://localhost:8080/chercherContacts?mc="+motcle+"&size="+size+"&page="+page)
      .pipe(map(resp=>resp));
  }
  getContact(id:number){
    return this.http.get("http://localhost:8080/contacts/"+id)
      .pipe(map(resp=>resp));
  }

  ajoutContacts(contact:Contact){
    return this.http.post("http://localhost:8080/contacts",contact)
      .pipe(map(resp=>resp));
  }

  updateContacts(contact: Contact){
    return this.http.put("http://localhost:8080/contacts/"+contact.id,contact)
      .pipe(map(resp=>resp));
  }
  deleteContacts(id:number){
    return this.http.delete("http://localhost:8080/contacts/"+id)
      .pipe(map(resp=>resp));
  }

}
