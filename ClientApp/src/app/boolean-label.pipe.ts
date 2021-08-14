import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanLabel'
})
export class BooleanLabelPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (value === false) { return "No" }

    if (value === true) { return "Yes"}

  }

}
