import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AddtutorialComponent } from './tutorials/addtutorial/addtutorial.component';
import { TutorialListComponent } from './tutorials/tutorial-list/tutorial-list.component';
import { TutorialDetailComponent } from './tutorials/tutorial-detail/tutorial-detail.component';
import { TutorialpublishComponent } from './tutorials/tutorialpublish/tutorialpublish.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AddtutorialComponent,
    TutorialListComponent,
    TutorialDetailComponent,
    TutorialpublishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
