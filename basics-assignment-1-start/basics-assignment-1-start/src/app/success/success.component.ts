import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `
    <p>This is a success</p>
  `,
  styles: [` p { 
      padding: 20px;
      background-color: palegreen;
      border: 1px solid green;
    } `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
