// import { Component, OnInit } from '@angular/core';
// import { BookService } from '../bookServices/book.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   allBooks: any[] = [];
//   selectedGenre: string = 'All'; // Default filter
//   searchData:any=""
//   sortData:any=""

//   constructor(private bs: BookService) {}

//   ngOnInit(): void {
//     this.getBook();
//   }

//   sortNames(){
//     this.sortData="sort"
//   }
//   getBook() {
//     this.bs.getBookApi().subscribe((result: any) => {
//       this.allBooks = result;
//       console.log(this.allBooks);
//     });
//   }

//   changeGenre(genre: string) {
//     this.selectedGenre = genre;
//   }
// }


// home.component.ts
import { Component, OnInit } from '@angular/core';
import { BookService } from '../bookServices/book.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBooks: any[] = [];
  selectedGenre: string = 'All'; // Default filter
  searchData: any = "";
  sortData: any = "";

  constructor(private bs: BookService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getBook();
    });
  }

  ngOnInit(): void {
    this.getBook();
  }

  sortNames() {
    this.sortData = "sort";
  }

  getBook() {
    this.bs.getBookApi().subscribe((result: any) => {
      this.allBooks = result;
      console.log(this.allBooks);
    });
  }

  changeGenre(genre: string) {
    this.selectedGenre = genre;
  }
}
