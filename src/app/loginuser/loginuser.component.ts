import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TutorialService } from '../tutorials/tutorial.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  //api login --> loggedin user detail... id name email password ....

  constructor(private service:TutorialService,private toastr:ToastrService,private router:Router) { }

  loginUser = new FormGroup({

    userEmail: new FormControl(''),
    userPassword: new FormControl(''),
  })

  ngOnInit(): void {
  }

  login(){

      this.service.loginUser(this.loginUser.value).subscribe(res=>{
        if(res.code==="OK"){
          localStorage.setItem("id",res.object.uId)
          this.toastr.success("Login Successfull");
          this.router.navigateByUrl("/tutoriallist");

        }
        else{
          alert("no user found...")
        }
      })

  }
  logout(){

  }

}
