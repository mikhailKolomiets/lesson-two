import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RateAndValueComponent } from './rate-and-value/rate-and-value.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { PreResultViewPipe } from './pre-result-view.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RateAndValueComponent,
    ResultViewComponent,
    PreResultViewPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
