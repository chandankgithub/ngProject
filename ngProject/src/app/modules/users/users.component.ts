import { Component, OnInit } from '@angular/core'

import {User} from './User'
import { UserService } from './user.service'

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    providers: [UserService],
    styles:[
        `
            a{
                cursor:pointer;
            }
        `
    ]
})
export class UsersComponent implements OnInit{
    users:User[];
    networkException:boolean=false;

    constructor(private _service: UserService){

    }
    
    ngOnInit(){
        this._service.getUsers()
                        .subscribe( users => {
                                                this.bindUser(users)
                                            },
                                    (err) => this.bindDefaultUsers()
                                    )
    }

    bindUser(users:User[]){
        this.users=users;
    }

    bindDefaultUsers(){
        this.networkException=true;
        this.users = this._service.getDefaultUsers()
    }

    deleteUser(user: User){
        /**
         * Optimistic approach. First update the view then call deleteUser
         * If delete is unsuccessful then undo the delete 
         */
        console.log(user);
        let actualUsers = this.users
        this.users = this.users.filter(x => x.id !== user.id)
        this._service.deleteUser(user)
                .subscribe(u => {
                    console.log(u);
                },
                (err) => this.users = actualUsers)
    }
}