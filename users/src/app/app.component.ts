import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Users';

  

  firstName : string = '';
  lastName : string = '';
  email : string = '';

  mountains : Array<string> = [];
  newUser: string = '';
  addNewUser:boolean = false;
  currentYear: number = 2019;


  onReset() : void {
    this.firstName  = '';
    this.lastName = '';
    this.email  = '';    
    this.addNewUser = false;
  }

  onAddUser(): void {
    this.newUser = `${this.firstName} - ${this.lastName}': ${this.email}`;
    this.mountains.push (this.newUser);
    this.addNewUser = true;
  }

  getCurrentYear(): number {
    return this.currentYear;
  }

  getColor():string {
    return  (this.addNewUser === true) ? "green" : "red";
  }


}
