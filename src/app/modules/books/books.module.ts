import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { HomeComponent } from './home/home.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './bookPipes/filter.pipe';
import { FiltergenrePipe } from './bookPipes/filtergenre.pipe';
import { SearchPipe } from './bookPipes/search.pipe';
import { SortPipe } from './bookPipes/sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    BooksComponent,
    HomeComponent,
    EditBookComponent,
    AddBookComponent,
    SingleViewComponent,
    ManageBooksComponent,
    FilterPipe,
    FiltergenrePipe,
    SearchPipe,
    SortPipe,
    ChartComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
