import { NotificationService } from './../../services/notification.service';
import { AuthService } from './../../services/authentication/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'main-navbar',
    templateUrl:'./main-navbar.component.html'
})

export class MainNavbarComponent{
    private _notifcationCounter: number;

    constructor(    private auth:AuthService,
                    private notificationService: NotificationService){

            this.notificationService.getNotificationCounter()
            .subscribe( n => {
                this._notifcationCounter = n
            })
    }
}