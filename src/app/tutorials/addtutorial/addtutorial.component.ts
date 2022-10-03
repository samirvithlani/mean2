import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-addtutorial',
  templateUrl: './addtutorial.component.html',
  styleUrls: ['./addtutorial.component.css']
})
export class AddtutorialComponent implements OnInit {

  constructor(private service:TutorialService,private router:Router,private toastr:ToastrService) { }

  addTutorial(){
    this.service.addTutorial(this.tutorialGroup.value).subscribe(res=>{
       this.toastr.success('Tutorial Added Successfully');
      this.router.navigate(['/tutoriallist']);
    })
  }
  tutorialGroup = new UntypedFormGroup({
    title:new UntypedFormControl('',Validators.required),
    description:new UntypedFormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    published:new UntypedFormControl('',Validators.required),
    fees:new UntypedFormControl('',Validators.required)

  })
  ngOnInit() {
  }

}
