import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {MainNavbarComponent } from './shared/navbar/main-navbar.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
                    AppComponent, 
                    MainNavbarComponent 
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
