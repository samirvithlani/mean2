import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  //api login --> loggedin user detail... id name email password ....
  userId:number=101;
  localid:any =0;
  localid1:any =0;
  constructor() { }

  ngOnInit(): void {
    //string formate...
    localStorage.setItem("id",this.userId.toString());
    sessionStorage.setItem("id",this.userId.toString());
  }

  getData (){

    this.localid = localStorage.getItem("id");
    this.localid1 = sessionStorage.getItem("id");
  }
  logout(){

    localStorage.removeItem("id");
    sessionStorage.removeItem("id");
    //localStorage.clear();

  }

}
