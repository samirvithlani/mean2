import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-addtutorial',
  templateUrl: './addtutorial.component.html',
  styleUrls: ['./addtutorial.component.css']
})
export class AddtutorialComponent implements OnInit {

  constructor(private service:TutorialService,private router:Router) { }

  addTutorial(){
    this.service.addTutorial(this.tutorialGroup.value).subscribe(res=>{
      // this.toastr.success('Tutorial Added Successfully');
      this.router.navigate(['/tutoriallist']);
    })
  }
  tutorialGroup = new FormGroup({
    title:new FormControl('',Validators.required),
    description:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    published:new FormControl('',Validators.required),
    fees:new FormControl('',Validators.required)

  })
  ngOnInit() {
  }

}
