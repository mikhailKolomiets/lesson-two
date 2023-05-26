import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  constructor() { }

  @Input() result: Number = 0

  ngOnInit(): void {
  }

}
