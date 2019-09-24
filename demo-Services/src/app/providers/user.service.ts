import { Injectable } from '@angular/core';
import {UserModel} from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users : UserModel[] = [
  new UserModel("Mama","Theas", "Foo@gmail.com")  ] ;
  getUsers() {
    return this.users;
  }
  
  addUsers(firstName : string, lastName: string, email: string) {


    this.users.push ( new UserModel(firstName,lastName, email));
    return this.users;
  }


}
