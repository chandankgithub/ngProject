import { AuthService } from './../../services/authentication/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'main-navbar',
    templateUrl:'./main-navbar.component.html'
})

export class MainNavbarComponent{
    constructor(private auth:AuthService){

    }
}