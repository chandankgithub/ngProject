import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { UsersModule } from './modules/users/users.module'
import { PostsModule } from './modules/posts/posts.module'
import { SharedModule } from './modules/shared/shared.modules'

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component'

import { PreventUnsavedChangesGuardService } from './route-guards/prevent-unsaved-changes-guard.services'

@NgModule({
  imports: [
      UsersModule,
      PostsModule,
      SharedModule,
      BrowserModule,
      HttpModule,
      RouterModule
  ],
  declarations: [
      AppComponent,
      HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [
      PreventUnsavedChangesGuardService
  ]

})
export class AppModule { }
