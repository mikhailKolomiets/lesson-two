import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preResultView'
})
export class PreResultViewPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    
    return "You'll get " + value.toLocaleString('de-DE', {maximumFractionDigits: 2}) + " UAH";
  }

}
