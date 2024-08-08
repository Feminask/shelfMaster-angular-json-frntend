import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // baseUrl="http://localhost:8000"
  baseUrl="https://shelfmaster-angular-json-server.onrender.com"


  constructor(private http:HttpClient) { }

  addBookApi(bodyData:any){
return this.http.post(`${this.baseUrl}/books`,bodyData)
  }


  getBookApi(){
    return this.http.get(`${this.baseUrl}/books`)
  }

  deleteBookApi(id:any){
    return this.http.delete(`${this.baseUrl}/books/${id}`)
  }

  getSingleBookApi(id:any){
    return this.http.get(`${this.baseUrl}/books/${id}`)

  }

  editBookApi(id:any,bodyData:any){
    return this.http.put(`${this.baseUrl}/books/${id}`,bodyData)
  }

}
