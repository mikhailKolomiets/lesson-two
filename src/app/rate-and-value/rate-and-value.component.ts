import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  valueInputForm = new FormControl('', [Validators.pattern('[0-9]*$'), Validators.required]);
  @Output() resultUpdater = new EventEmitter<Number>();

  constructor(private service: NbuRatesService) {
    service.updatesRates();
    this.rates = service.getRates();
   }

  ngOnInit(): void {
  }

  calculate(toCount: any) {
    console.log( ('' + toCount.target.className).includes('ng-invalid'));
      if ((toCount.target.className).includes('ng-valid')) {
        localStorage.setItem("userInput", toCount.target.value);
        this.calculateLogic(toCount.target.value);
      } else {
        this.calculateLogic('0');
      }
  }

  onSelectRate(rateId: any) {
    console.log(rateId)
    this.rate = this.rates[rateId];
    if(localStorage.getItem("userInput") != null) {
      let preExFromStorage: any = localStorage.getItem("userInput");
      console.log("preEx from storage: " + preExFromStorage)
      this.preExchangeInput = preExFromStorage;
      this.valueInputForm.setValue(preExFromStorage);
      this.calculateLogic(preExFromStorage);
    }
    //this.rates = this.service.getRates();
  }

  confirmExc() {
    console.log("delegate")
    this.resultUpdater.emit(this.preExchange);
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
