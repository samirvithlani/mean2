import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.css']
})
export class TutorialDetailComponent implements OnInit {

  //ts private object construtor..
  //router
  constructor(private router:ActivatedRoute) { }

  //id:number = 0;
  data:any=null; //instance.. this

  ngOnInit() {

      console.log(this.router.snapshot.params.id);
      this.data = this.router.snapshot.params.id;
  }

}
