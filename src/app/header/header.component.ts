import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TutorialService } from '../tutorials/tutorial.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private toastr:ToastrService,private service:TutorialService) { }
  logout(){
    localStorage.removeItem("id");
    this.toastr.success("Logout Successfull");
    this.router.navigateByUrl("/login");
  }

  userid:any;
  uid:number
  user:any;

  ngOnInit() {

    //string
    this.userid = localStorage.getItem("id");
    this.uid = parseInt(this.userid);

    if(this.userid!== null || this.userid!== undefined){
      this.service.getuserById(this.uid).subscribe(res=>{
        console.log(res);
        this.user = res.object;
      })  
    }
    else{
      this.router.navigateByUrl("/login");
    }
    
  }

}
