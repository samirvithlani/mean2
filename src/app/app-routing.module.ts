import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtutorialComponent } from './tutorials/addtutorial/addtutorial.component';
import { TutorialDetailComponent } from './tutorials/tutorial-detail/tutorial-detail.component';
import { TutorialListComponent } from './tutorials/tutorial-list/tutorial-list.component';
import { TutorialpublishComponent } from './tutorials/tutorialpublish/tutorialpublish.component';


const routes: Routes = [
  {
    path:'addtutorial',component:AddtutorialComponent
  },
  {
    path:'tutoriallist',component:TutorialListComponent
  },
  {
    path:'tutorialdetail/:id',component:TutorialDetailComponent
  },
  {
    path:'publish',component:TutorialpublishComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
