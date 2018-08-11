import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username="";
  allowClick=false;

  onUpdateButton(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username == ""){
      this.allowClick = false;
    } else {
      this.allowClick = true;
    }
  } 

  clickButton(){
    console.log(this.username)
    this.username = "";
    this.allowClick=false;
  }
}
