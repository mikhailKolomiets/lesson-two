import { AfterViewChecked, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnChanges {

  constructor() { }

  resultHistory: Number[] = []
  history: string = "No exchange yet"

  @Input() result: Number = 0

  ngOnChanges(): void {
    if(this.result != 0) {
      //save result and update history 
      this.resultHistory.push(this.result)
      this.updateHistory()
    }
  }


  private updateHistory() {
    var exc = this.resultHistory.length;
    if (exc > 0) {
      var sum: number = 0;

      this.resultHistory.forEach(
         (value) => sum += value.valueOf()
      )
      this.history = "You does " + exc + " exchanges this sum " + sum;
    }
    

  }

}
