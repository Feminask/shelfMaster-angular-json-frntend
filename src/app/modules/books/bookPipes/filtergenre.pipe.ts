import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtergenre' // Make sure this name matches the name used in the template
})
export class FiltergenrePipe implements PipeTransform {

  transform(booksArray: any[], filterGenre: string): any[] {
    if (!booksArray || !filterGenre || filterGenre === 'All') {
      return booksArray;
    }

    return booksArray.filter(item => item.genre === filterGenre);
  }
}
