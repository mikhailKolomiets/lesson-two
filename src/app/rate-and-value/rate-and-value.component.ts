import { Component, OnInit } from '@angular/core';
import { NbuRatesService } from '../nbu-rates.service';

@Component({
  selector: 'app-rate-and-value',
  templateUrl: './rate-and-value.component.html',
  styleUrls: ['./rate-and-value.component.css']
})
export class RateAndValueComponent implements OnInit {

  rates: any;
  rate: any = "init"
  preExchange: number = 0;
  preExchangeInput: any = ""

  constructor(private service: NbuRatesService) {
    service.updatesRates();
    this.rates = service.getRates();
   }

  ngOnInit(): void {
  }

  calculate(toCount: any) {
      localStorage.setItem("userInput", toCount.target.value);
      this.calculateLogic(toCount.target.value);
  }

  onSelectRate(rateId: any) {
    console.log(rateId)
    this.rate = this.rates[rateId];
    if(localStorage.getItem("userInput") != null) {
      let preExFromStorage: any = localStorage.getItem("userInput");
      console.log("preEx from storage: " + preExFromStorage)
      this.preExchangeInput = preExFromStorage;
      this.calculateLogic(preExFromStorage);
    }
    //this.rates = this.service.getRates();
  }

  private calculateLogic(toCount: string) {
    this.preExchange = Number.parseInt(toCount);
    if (this.preExchange > 0) {
      this.preExchange *= this.rate.rate;
      // to do calculate logic
    } else {
      this.preExchange = 0;
    }
    console.log(this.preExchange)
  }

}
