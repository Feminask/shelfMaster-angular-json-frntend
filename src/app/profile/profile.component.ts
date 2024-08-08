import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminServices/admin.service';
import { ToastService } from '../adminServices/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editView:boolean=false
adminData:any={}
profilePic:any="https://i.postimg.cc/k47z8mtx/avataranimation.gif"

constructor(private service:AdminService,private toast:ToastService){}


ngOnInit(): void {
  if(localStorage.getItem("admin")){
    this.adminData=JSON.parse(localStorage.getItem("admin") || "")
    console.log(this.adminData);

    if(this.adminData.profile!=""){
      this.profilePic=this.adminData.profile
    }
    
   }
}

getFile(event:any){
  let file=event.target.files[0]
  console.log(file);

  //convert into url

  let fr=new FileReader()

  //convert
  fr.readAsDataURL(file)

  //store the converted url
  fr.onload=(event:any)=>{
    console.log(event.target.result);

    //change profile with preview
    this.profilePic=event.target.result

    //change in adminData
    this.adminData.profile=event.target.result
    console.log(this.adminData);
      
  } 
}

update(){
  if(this.adminData.email!="" && this.adminData.password!="" && this.adminData.username!=""){
    this.service.profileUpdateApi(this.adminData).subscribe((result:any)=>{
      // console.log(result);
      localStorage.setItem("admin",JSON.stringify(result))
      this.cancel()
  //  let adminUsername=result.email.slice(0,result.email.indexOf('@'))

      // this.adminChange.emit(adminUsername)
      // this.toast.showSuccess("profile Updated")
    })
  }else{
    alert("fill email and password")
  }
}





  edit(){
    this.editView=true
  }
  cancel(){
    this.editView=false
  
  }
}
