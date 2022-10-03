import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

  constructor(private service:TutorialService) { }
  tutorials:any;

  delete(id){
    
  this.service.deleteTutorial(id).subscribe(res=>{
  //alert('Tutorial Deleted Successfully');
  //getalltuturials
  //
  this.ngOnInit();
})
  }
  ngOnInit() {

    this.service.getAllTutorials().subscribe(res=>{
      console.log(res);
      this.tutorials = res
    })
  }



}
