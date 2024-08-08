import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(BookArray: any[], searchString: string): any {
    if (!BookArray || !searchString) {
      return BookArray;
    } else {
      const trimmedSearchString = searchString.trim().toLowerCase();
      return BookArray.filter((i: any) => 
        i.title.trim().toLowerCase().includes(trimmedSearchString) || 
        i.author.trim().toLowerCase().includes(trimmedSearchString)
      );
    }
  }
}
