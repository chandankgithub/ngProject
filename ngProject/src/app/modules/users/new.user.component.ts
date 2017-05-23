import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms'
import { Router } from '@angular/router'

import { IFormComponent } from '../../common-lib/IFormComponent'
import { UserFormValidator } from './user-form.validator'
import { UserService } from './user.service'

@Component({
    selector: 'new-user',
    templateUrl:'./new.user.component.html'
})
export class NewUserComponent implements OnInit, IFormComponent{
    _signupform: FormGroup;
    _emailexpression: "/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm"

    constructor(private _service: UserService,
                private _router: Router){
        this._signupform= new FormGroup({
                name: new FormControl('', Validators.required),
                email: new FormControl('', Validators.compose([Validators.required, 
                                                        UserFormValidator.validateEmail]) ),
                phone: new FormControl(''),
                address: new FormGroup({
                    street: new FormControl(''),
                    suite: new FormControl(''),
                    city: new FormControl(''),
                    zipcode: new FormControl('')

                })
        })
    }
    ngOnInit(){

    }

    signup(){
        // console.log(this._signupform.value);
        this._service.addUser(this._signupform.value)
        .subscribe( u => {
            this._signupform.reset()
            this._router.navigate(['users'])
        })
    }

    isFormDirty(): boolean{
        return this._signupform.dirty
    }
}