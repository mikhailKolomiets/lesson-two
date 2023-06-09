import { Component, DoCheck, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NbuRatesService } from '../service/nbu-rates.service';

@Component({
  selector: 'app-rate-and-value',
  templateUrl: './rate-and-value.component.html',
  styleUrls: ['./rate-and-value.component.css']
})
export class RateAndValueComponent implements DoCheck {

  rates: any;
  rate: any = "init"
  preExchange: number = 0;
  preExchangeInput: any = ""
  valueInputForm = new FormControl('', [Validators.pattern('[0-9]*$'), Validators.required]);
  @Output() resultUpdater = new EventEmitter<Number>();
  exchangeDo: boolean = false;

  constructor(private service: NbuRatesService) {
    service.updatesRates();
    this.rates = service.getRates();
   }

  ngDoCheck(): void {
    if(!this.exchangeDo) {
      this.resultUpdater.emit(0);
    } else {
      //ONLY in this moment we show exchange result
      this.exchangeDo = false;
    }
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
      this.preExchangeInput = preExFromStorage;
      this.valueInputForm.setValue(preExFromStorage);
      this.calculateLogic(preExFromStorage);
    }
  }

  confirmExc() {
    this.resultUpdater.emit(this.preExchange);
    this.exchangeDo = true;
  }

  private calculateLogic(toCount: string) {
    this.preExchange = Number.parseInt(toCount);
    if (this.preExchange > 0) {
      this.preExchange *= this.rate.rate;
    } else {
      this.preExchange = 0;
    }
    console.log(this.preExchange)
  }

}
