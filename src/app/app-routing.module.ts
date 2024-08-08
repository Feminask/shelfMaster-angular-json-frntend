import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',canActivate:[authGuard],component:DashboardComponent},
  { path: 'books',canActivate:[authGuard], loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule) },
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
