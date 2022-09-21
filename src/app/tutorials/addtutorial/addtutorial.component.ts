import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addtutorial',
  templateUrl: './addtutorial.component.html',
  styleUrls: ['./addtutorial.component.css']
})
export class AddtutorialComponent implements OnInit {

  constructor() { }
  addTutorial(){
    console.log(this.tutorialGroup);
  }
  tutorialGroup = new FormGroup({
    title:new FormControl('',Validators.required),
    description:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    gender:new FormControl(''),
    phone:new FormControl('',Validators.pattern('[6-9]{1}[0-9]{9}')),

  })
  ngOnInit() {
  }

}
