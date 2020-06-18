import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 infos={
   name:"Lhoussaine OUSTANI",
   email:'lhoussaine.oustani@gmail.com'

 }
  constructor() { }

  ngOnInit() {
  }

}
