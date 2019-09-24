import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  userName : string = 'Foo';
  passWord : string = 'password';
  
  authenticate(userName: string , passWord : string):boolean {
    if (this.userName ===    userName && this.passWord ===    passWord) {
      return true;  
    }
    return false;
  }

}
