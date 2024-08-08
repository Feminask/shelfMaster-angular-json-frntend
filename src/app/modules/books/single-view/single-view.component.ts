import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../bookServices/book.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {
  id: string = "";
  bookData: any = {};
  defaultImageUrl: string = 'https://i.postimg.cc/7hCDDH8k/book-icon-4-removebg-preview.png'; // Use this as a fallback image

  constructor(private ar: ActivatedRoute, private bs: BookService) {}

  ngOnInit(): void {
    this.ar.params.subscribe((params: any) => {
      this.id = params.id;
      this.loadBookData();
    });
  }

  loadBookData(): void {
    this.bs.getSingleBookApi(this.id).subscribe({
      next: (data: any) => {
        this.bookData = data;
        console.log('Book Data:', this.bookData);
      },
      error: (error) => {
        console.error('Error fetching book data:', error);
      }
    });
  }

  handleImageError(event: any): void {
    event.target.src = this.defaultImageUrl;
  }
}