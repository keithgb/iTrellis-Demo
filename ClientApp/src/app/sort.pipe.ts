import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items:[], direction:string, column:string, type: string) {
    return items;
  }

}
