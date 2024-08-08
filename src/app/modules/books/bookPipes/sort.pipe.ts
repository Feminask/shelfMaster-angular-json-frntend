import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(BookArray: any[], sortData: string): any {
    if (!BookArray || !sortData) {
      return BookArray;
    } else {
      return BookArray.sort((a: any, b: any) => 
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
    }
  }
}
