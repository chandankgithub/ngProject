import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MainNavbarComponent } from './main-navbar.component';
import { PaginationComponent } from './pagination.component'
import { SpinnerComponent } from './spinner.component'

import { AppRouting } from '../../app.routing'
import { HomeRouting } from '../home/home.routing'
import { UsersRouting } from '../users/users.routing'
import { PostsRouting } from '../posts/posts.routing'

@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        //keep child routing above parent routing
        HomeRouting,
        PostsRouting,
        UsersRouting, 
        AppRouting //parent routing
    ],
    declarations:[
        MainNavbarComponent,
        PaginationComponent,
        SpinnerComponent
    ],
    providers:[

    ],
    exports:[
        MainNavbarComponent,
        PaginationComponent,
        SpinnerComponent
    ]
})

export class SharedModule{

}