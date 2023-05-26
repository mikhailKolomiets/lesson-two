import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson-two';
  rates = [
    { "rate" : "1.0", "cc" : "UAH"},
    { "rate" : "38.25", "cc" : "USD"},
    { "rate" : "40.43", "cc" : "EUR"},
    { "rate" : "8.5", "cc" : "PLZ"},
    { "rate" : "42.2", "cc" : "FNT"},
]
  result: Number = 0;

  setResult(result: Number) {
    this.result = result;
    console.log(result)
  }
}
