import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms'

@Component({
    selector: 'new-user',
    templateUrl:'./new.user.component.html'
})
export class NewUserComponent implements OnInit{
    _signupform: FormGroup;

    constructor(){
        this._signupform= new FormGroup({
                user: new FormGroup({
                    name: new FormControl('', Validators.required),
                    email: new FormControl('', Validators.required),
                    phone: new FormControl('', Validators.required)
                }),
                address: new FormGroup({
                    street: new FormControl('', Validators.required),
                    suite: new FormControl(''),
                    city: new FormControl('', Validators.required),
                    zipcode: new FormControl('', Validators.required)

                })
        })
    }
    ngOnInit(){

    }

    signup(){
        console.log(this._signupform.value);
    }
}