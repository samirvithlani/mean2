import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-updatetutorial',
  templateUrl: './updatetutorial.component.html',
  styleUrls: ['./updatetutorial.component.css']
})
export class UpdatetutorialComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:TutorialService,private toastr:ToastrService,private router:Router) { }

  tId:number=0;
  tutorial:any;
  tutorialGroup = new FormGroup({
    title:new FormControl('',Validators.required),
    description:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    published:new FormControl('',Validators.required),
    fees:new FormControl('',Validators.required)
  })

  updateTutorial(){

    this.service.updateTutorial(this.tId,this.tutorialGroup.value).subscribe(res=>
    {
      this.toastr.success('Tutorial Updated Successfully');
      //this.router.navigateByUrl('/tutoriallist');
      this.router.navigate(['/tutoriallist']);
    })

  }
  ngOnInit(): void {

    this.tId = this.route.snapshot.params['id'];
    this.service.getTutorialById(this.tId).subscribe(res=>{
      this.tutorial = res;
      
    })

  }

}
