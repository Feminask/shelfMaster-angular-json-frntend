import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

// baseUrl="http://localhost:8000"
baseUrl="https://shelfmaster-angular-json-server.onrender.com"

  constructor(private http:HttpClient) { }

loginApi(){
return this.http.get(`${this.baseUrl}/admins`)
}
profileUpdateApi(bodyData:any){
  return  this.http.put(`${this.baseUrl}/admins/1`,bodyData)
  }


  getBookApi(){
    return this.http.get(`${this.baseUrl}/books`)
  }


}

