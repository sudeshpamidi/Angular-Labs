import { Component, OnInit } from '@angular/core';
import {UserModel} from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  firstName:string;
  lastName:string;
  email:string;

  users : UserModel[]= []; 
  
  constructor() { }
  ngOnInit() {
  }


  addUser(): void {        
    this.users.push (  new UserModel(this.firstName, this.lastName, this.email));
  }

  reset():void {
    this.firstName = "";
    this.lastName = "";
    this.email = "";

  }
}
