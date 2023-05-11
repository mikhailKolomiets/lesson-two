import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-and-value',
  templateUrl: './rate-and-value.component.html',
  styleUrls: ['./rate-and-value.component.css']
})
export class RateAndValueComponent implements OnInit {

  rate = 35.34

  constructor() { }

  ngOnInit(): void {
  }

  calculate() {
    this.rate += 0.01
    console.log(this.rate)
    // todo any magic...
  }

}
