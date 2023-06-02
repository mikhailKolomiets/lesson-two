import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NbuRatesService {

  rates = [
    { "rate" : "1.0", "cc" : "UAH", "exchangedate" : "e"},
]

  constructor(private client: HttpClient) {
   }

   getRates() {
    if (localStorage.getItem("rates") == null)
      return this.rates;
    else {
      let data = localStorage.getItem("rates");
      return JSON.parse(data == null ? "" : data);
    }
   }

   updatesRates() {

    if (localStorage.getItem("rates") == null || this.isBeforeOfNow(this.rates[0].exchangedate + ""))
    this.client.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json").subscribe(
      (data: any) => {
        console.log("rates was updated");
        this.rates = data;
        localStorage.setItem("rates", JSON.stringify(data))
        window.location.reload();
      }
    )
   }

   // dateString - dd/MM/yyyy
   // return true if its date is coming
   private isBeforeOfNow(dateString :String) {
    let dateStrArr = dateString.split(".");
    console.log(dateStrArr)
    let d: Date =  new Date(dateStrArr[1] + "/" + dateStrArr[0] + "/" + dateStrArr[2]);
    let time: number = d.getTime();
    return new Date().getTime() > time;
   }
}
