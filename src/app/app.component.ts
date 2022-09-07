import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //business logic
  age:number = 100;
  name:string = "raj";
  isMarried:boolean = true;
  city :any = "bangalore";

  users : any ={
    name:"jay",
    age:100,
    city:"bangalore",
    isMarried:true

}

}
