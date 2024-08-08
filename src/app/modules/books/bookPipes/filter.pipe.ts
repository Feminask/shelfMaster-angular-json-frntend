import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(booksArray: any[], filterStock: string): any[] {
    if (!booksArray || !filterStock) {
      return booksArray;
    }

    switch (filterStock) {
      case 'instock':
        return booksArray.filter(item => item.stock > 0);
      case 'outofstock':
        return booksArray.filter(item => item.stock <= 0);
      case 'all':
      default:
        return booksArray;
    }
  }
}
