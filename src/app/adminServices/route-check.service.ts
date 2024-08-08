import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteCheckService {

  constructor() { }

  isLoggedIn(){
    return !!localStorage.getItem("admin")
  }
}
