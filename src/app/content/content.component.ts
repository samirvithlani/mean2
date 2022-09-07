import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  age:number = 20;
  isAvaialble:boolean = false;

  salaries:any[] = [125.5, 200.5, 300.5, 400.5, 500.5];
  users :any[] = [
    {
      name:"John",
      age:20,
      salary:20000.55,
      isActive:true,
      gender:"Male"
    },
    {
      name:"rajvi",
      age:25,
      salary:20000.55,
      isActive:false,
      gender:"Female"
    },
    {
      name:"parth",
      age:22,
      salary:1536525.2,
      isActive:false,
      gender:"Male"
    },
  ]

  constructor() { }
  ngOnInit() {
  }

}
