// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { BookService } from '../bookServices/book.service';

// @Component({
//   selector: 'app-add-book',
//   templateUrl: './add-book.component.html',
//   styleUrls: ['./add-book.component.css']
// })
// export class AddBookComponent {
//   book = {
//     title: '',
//     author: '',
//     genre: '',
//     price: 0,
//     stock: 0,
//     description: '',
//     img: ''
//   };

//   selectedFile: File | null = null;
//   previewUrl: string | ArrayBuffer | null = null;

//   constructor(private bookService:BookService, private router: Router) {}

//   addBook() {
//     if (this.selectedFile) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.book.img = e.target.result;
//         this.submitBook();
//       };
//       reader.readAsDataURL(this.selectedFile);
//     } else {
//       this.submitBook();
//     }
//   }

//   submitBook() {
//     this.bookService.addBookApi(this.book).subscribe(
//       (response) => {
//         console.log('Book added successfully', response);
//         this.router.navigate(['/books']);
//       },
//       (error) => {
//         console.error('Error adding book', error);
//       }
//     );
//   }

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//     this.previewImage();
//   }

//   previewImage() {
//     if (this.selectedFile) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.previewUrl = e.target.result;
//       };
//       reader.readAsDataURL(this.selectedFile);
//     }
//   }
// }   



import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../bookServices/book.service';
import { ToastService } from '../../../adminServices/toast.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements AfterViewInit {
  @ViewChild('fileInput') fileInput!: ElementRef;  // Ensure the element reference is initialized

  book = {
    title: '',
    author: '',
    genre: '',
    price: 0,
    stock: 0,
    description: '',
    img: ''
  };

  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private bookService: BookService, private router: Router,private toast:ToastService) {}

  ngAfterViewInit() {
    // This ensures the ViewChild is initialized after the view is fully loaded
    if (!this.fileInput) {
      console.error('File input element not found');
    }
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  addBook() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.book.img = e.target.result;
        this.submitBook();
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.submitBook();
    }
  }

  submitBook() {
    this.bookService.addBookApi(this.book).subscribe(
      (response) => {
        console.log('Book added successfully', response);
              this.toast.showSuccess("New book added")

        this.router.navigate(['/books']);
      },
      (error) => {
        console.error('Error adding book', error);
      }
    );
  }
}
