

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../bookServices/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id: any = '';
  bkData: any = {};
  defaultImageUrl: string = 'path/to/default/image.jpg'; // Set default image URL

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private ar: ActivatedRoute,
    private bs: BookService,
    private rout: Router
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.id = data.id;
      this.bs.getSingleBookApi(this.id).subscribe((data: any) => {
        this.bkData = data;
      });
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.bkData.img = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  update(): void {
    this.bs.editBookApi(this.id, this.bkData).subscribe(() => {
      this.rout.navigateByUrl('/books');
    });
  }
}
