import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-and-value',
  templateUrl: './rate-and-value.component.html',
  styleUrls: ['./rate-and-value.component.css']
})
export class RateAndValueComponent implements OnInit {

  @Input() rates: any;
  rate: any = "init"
  preExchange: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(toCount: any) {
      this.preExchange = Number.parseInt(toCount.target.value);
      if (this.preExchange > 0) {
        this.preExchange *= this.rate.rate;
        // to do calculate logic
      } else {
        this.preExchange = 0;
      }
      console.log(this.preExchange)
  }

  onSelectRate(rateId: any) {
    console.log(rateId)
    this.rate = this.rates[rateId];
  }

}
