import { SharedModule } from './../shared/shared.modules';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserProfileComponent } from './user-profile.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        UserProfileComponent
    ],
    declarations: [
        UserProfileComponent
    ],
    providers: [],
})
export class UserProfileModule { }
