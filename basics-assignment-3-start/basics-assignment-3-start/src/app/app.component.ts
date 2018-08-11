import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showP = true;
  clickLog = []
  counterLog = []
  counter = 0

  onClick(event: Event){
    this.counter += 1;
    this.clickLog.push({timestamp: event.timeStamp, count:this.counter})
    this.counterLog.push(this.counter)
  }

  getColor(timestamp){
    console.log(timestamp)
    return timestamp.count>4 ? 'blue' : 'transparent';
  }

}
