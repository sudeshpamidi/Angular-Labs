import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  currentYear = 2019;
  
  getCurrentYear():number {
    return this.currentYear;
  }

  ngOnInit() {    
  }

}
