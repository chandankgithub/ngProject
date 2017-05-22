import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormBuilder, 
          FormsModule, 
          ReactiveFormsModule
        } from '@angular/forms'

import { AppComponent }  from './app.component';
import { AppRouting } from './app.routing'
import { HomeComponent } from './modules/home/home.component'
import { HomeRouting } from './modules/home/home.routing'
import { MainNavbarComponent } from './modules/shared/main-navbar.component';
import { NewUserComponent } from './modules/users/new.user.component'
import { PostsComponent } from './modules/posts/posts.component'
import { PostsRouting } from './modules/posts/posts.routing'
import { UsersComponent } from './modules/users/users.component'
import { UsersRouting } from './modules/users/users.routing'



@NgModule({
  imports:      [ 
                  BrowserModule,
                  HttpModule,
                  FormsModule, 
                  ReactiveFormsModule,
                  //keep child routing above parent routing
                  HomeRouting,
                  PostsRouting,
                  UsersRouting, 
                  AppRouting //parent routing
                  
                ],
  declarations: [ 
                    AppComponent, 
                    MainNavbarComponent,
                    HomeComponent,
                    UsersComponent,
                    PostsComponent,
                    NewUserComponent
                ],
  bootstrap:    [ AppComponent ],
  providers: [FormBuilder],

})
export class AppModule { }