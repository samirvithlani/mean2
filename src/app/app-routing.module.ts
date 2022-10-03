import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { AddtutorialComponent } from './tutorials/addtutorial/addtutorial.component';
import { TutorialDetailComponent } from './tutorials/tutorial-detail/tutorial-detail.component';
import { TutorialListComponent } from './tutorials/tutorial-list/tutorial-list.component';
import { TutorialpublishComponent } from './tutorials/tutorialpublish/tutorialpublish.component';
import { UpdatetutorialComponent } from './tutorials/updatetutorial/updatetutorial.component';


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
  },
  {
    path:'updatetutorial/:id',component:UpdatetutorialComponent
  },
  {
    path:'login',component:LoginuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
