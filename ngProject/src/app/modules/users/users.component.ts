import { Component, OnInit } from '@angular/core'

import {IUser} from './IUser'
import { UserService } from './user.service'

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    providers: [UserService]
})
export class UsersComponent implements OnInit{
    users:IUser[];

    constructor(private _service: UserService){

    }
    ngOnInit(){
        this._service.getUsers()
                        .subscribe( users => this.bindUser(users))
    }
    bindUser(users:IUser[]){
        this.users=users;
    }
}