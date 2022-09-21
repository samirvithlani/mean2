import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

  constructor(private service:TutorialService) { }
  data:any;

  tutorials =[
    {
      id:1,
      title:'Angular Tutorial',
      description:'Angular Tutorial for beginners',
      published:true
    },
    {
      id:2,
      title:'Java Tutorial',
      description:'Java utorial for beginners',
      published:false
    },
    {
      id:3,
      title:'Python Tutorial',
      description:'Python Tutorial for beginners',
      published:true
    }
  ]

  ngOnInit() {

    this.service.getAllTutorials().subscribe(res=>{
      console.log(res.data);
      this.data = res.data;
    })
  }



}
