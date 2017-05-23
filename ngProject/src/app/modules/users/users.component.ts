import { Component, OnInit } from '@angular/core'

import {User} from './User'
import { UserService } from './user.service'

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    providers: [UserService]
})
export class UsersComponent implements OnInit{
    users:User[];

    constructor(private _service: UserService){

    }
    
    ngOnInit(){
        this._service.getUsers()
                        .subscribe( users => this.bindUser(users))
    }

    bindUser(users:User[]){
        this.users=users;
    }
}