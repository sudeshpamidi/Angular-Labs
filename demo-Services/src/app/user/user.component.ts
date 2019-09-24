import { Component, OnInit } from '@angular/core';
import {UserModel} from './user.model';
import {UserService} from '../providers/user.service';

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
  
  constructor(private userService: UserService) { 
    
  }
  ngOnInit() {
    this.users = this.userService.getUsers()
  }


  addUser(): void {      
    this.users = this.userService.addUsers(this.firstName, this.lastName, this.email)  
    
  }

  reset():void {
    this.firstName = "";
    this.lastName = "";
    this.email = "";

  }
}
