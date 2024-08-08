import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import { BookService } from '../modules/books/bookServices/book.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  totalBooks = 0;
  topGenres: { name: string; count: number }[] = [];
  topAuthors: { name: string; count: number }[] = [];
  books: any[] = [];
  
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.fetchBookData();
  }

  fetchBookData() {
    this.bookService.getBookApi().subscribe(
      (response: any) => {
        this.books = response;
        this.totalBooks = this.books.length;
        this.processBookData();
        this.createChart();
      },
      (error) => {
        console.error('Error fetching book data:', error);
      }
    );
  }

  processBookData() {
    // Process genres
    const genreCounts: {[key: string]: number} = {};
    this.books.forEach(book => {
      if (book.genre) {
        genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1;
      }
    });
    this.topGenres = Object.entries(genreCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);

    // Process authors
    const authorCounts: {[key: string]: number} = {};
    this.books.forEach(book => {
      if (book.author) {
        authorCounts[book.author] = (authorCounts[book.author] || 0) + 1;
      }
    });
    this.topAuthors = Object.entries(authorCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
  }

  createChart() {
    const monthlyData = this.getMonthlyData();
    const ctx = document.getElementById('bookChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(monthlyData),
        datasets: [{
          label: 'Books Added',
          data: Object.values(monthlyData),
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        animation: {
          duration: 1500,
          easing: 'easeInOutQuart'
        }
      } as ChartConfiguration['options']
    });
  }

  getMonthlyData(): {[key: string]: number} {
    const monthlyData: {[key: string]: number} = {};
    const currentYear = new Date().getFullYear();
    
    this.books.forEach(book => {
      const addedDate = new Date(book.addedDate);
      if (addedDate.getFullYear() === currentYear) {
        const monthKey = addedDate.toLocaleString('default', { month: 'short' });
        monthlyData[monthKey] = (monthlyData[monthKey] || 0) + 1;
      }
    });

    return monthlyData;
  }
}