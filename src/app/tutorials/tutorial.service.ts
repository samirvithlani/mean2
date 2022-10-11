import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http:HttpClient) { }

    public getAllTutorials():Observable<any>{
      return this.http.get('https://tutorialapi1.herokuapp.com/tutorial');
    }

    public addTutorial(tutorial:any):Observable<any>{

      if(tutorial.published == 'true'){
        tutorial.published = true;
      }
      else{
        tutorial.published = false;
      }

      var tutorialdata = {
        title:tutorial.title,
        description:tutorial.description,
        published:tutorial.published,
        fees:tutorial.fees
      }

      return this.http.post('https://tutorialapi1.herokuapp.com/tutorial',tutorialdata);
    }

    public deleteTutorial(id:any):Observable<any>{
      return this.http.delete('https://tutorialapi1.herokuapp.com/tutorial/'+id);
    }


    public getTutorialById(id:any):Observable<any>{

      return this.http.get("https://tutorialapi1.herokuapp.com/tutorial/"+id);

    }

    public updateTutorial(id:any,tutorial:any):Observable<any>{
      if(tutorial.published == 'true'){
        tutorial.published = true;
      }
      else{
        tutorial.published = false;
      }

      var tutorialdata = {
        title:tutorial.title,
        description:tutorial.description,
        published:tutorial.published,
        fees:tutorial.fees
      }


      return this.http.put("https://tutorialapi1.herokuapp.com/tutorial/"+id,tutorialdata);
    }

    public loginUser(user:any):Observable<any>{

      return this.http.post("http://localhost:8080/loginuser",user);
    }

    public getuserById(id:any):Observable<any>{
      return this.http.get("http://localhost:8080/user/"+id);
    }
    
}
