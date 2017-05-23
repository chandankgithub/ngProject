import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms'

import { UserFormValidator } from './user-form.validator'
@Component({
    selector: 'new-user',
    templateUrl:'./new.user.component.html'
})
export class NewUserComponent implements OnInit{
    _signupform: FormGroup;
    _emailexpression: "/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm"

    constructor(){
        this._signupform= new FormGroup({
                user: new FormGroup({
                    name: new FormControl('', Validators.required),
                    email: new FormControl('', Validators.compose([Validators.required, 
                                                            UserFormValidator.validateEmail]) ),
                    phone: new FormControl('')
                }),
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
    }
}