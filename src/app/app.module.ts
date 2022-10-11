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
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UpdatetutorialComponent } from './tutorials/updatetutorial/updatetutorial.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AddtutorialComponent,
    TutorialListComponent,
    TutorialDetailComponent,
    TutorialpublishComponent,
    UpdatetutorialComponent,
    LoginuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TableModule,
    ToastModule
    

    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
