import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.css']
})
export class DropdownlistComponent implements OnInit {

  // declared array of months. 
  months = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"]; 
  
  constructor() { }

  ngOnInit() {
  }

}
