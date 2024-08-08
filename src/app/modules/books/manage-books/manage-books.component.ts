import { Component,OnInit } from '@angular/core';
import { BookService } from '../bookServices/book.service';
import { ToastService } from 'src/app/adminServices/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {
  allBooks:any=[]
filterData:any=""
searchData:any=""
sortData:any=""
p: number = 1;
  constructor(private bs:BookService,private toast:ToastService,private rout:Router){}

  ngOnInit(): void {
  this.getBook()
  }
  sortNames(){
    this.sortData="sort"
  }

  changeFilterData(data:any){
    this.filterData=data
  }
  

  getBook(){
    this.bs.getBookApi().subscribe((result:any)=>{
      this.allBooks=result
      console.log(this.allBooks);
            
    })
    }
    
    deleteBook(id:any){
this.bs.deleteBookApi(id).subscribe((result:any)=>{
  this.toast.showSuccess(`Book deleted`)
  this.getBook()
})
    }


   logout(){
    localStorage.removeItem("admin")
    this.rout.navigateByUrl("/")
   }

  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }


}
