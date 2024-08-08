import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../adminServices/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private fb:FormBuilder,private service:AdminService,private route:Router) {}

  //model for login form
  loginFormModel=this.fb.group({
    email:["",[Validators.required,Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
    psw:["",[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]]
  })




   ngOnInit(): void {
     
   }

   login(){
    if(this.loginFormModel.valid)
{   var path=this.loginFormModel.value
    // console.log(path.email);
    // console.log(path.psw);
var email=path.email
var psw=path.psw
this.service.loginApi().subscribe((data:any)=>{

  // console.log(data[0]);
  var admin_email=data[0].email
  var admin_psw=data[0].password
if(email==admin_email){
if(psw==admin_psw){
  localStorage.setItem("admin",JSON.stringify(data[0]))
  // alert("login success")
  this.route.navigateByUrl("/books")
}else{alert("incurrect password")}
}else{
  alert("incorrect email")
}
})
} else{
  alert("invalid")
} }
}





