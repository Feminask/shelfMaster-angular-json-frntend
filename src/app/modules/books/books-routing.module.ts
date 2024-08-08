import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddBookComponent },
  { path: ':id/edit', component: EditBookComponent },
  { path: ':id/singleview', component: SingleViewComponent},
  { path: 'manage-books', component: ManageBooksComponent }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
