import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'


import { IUser } from './IUser'

@Injectable()
export class UserService{
    _url:string = "https://jsonplaceholder.typicode.com/users"
    constructor(private _http: Http){

    }
    
    getUsers(): Observable<IUser[]>{
        return this._http.get(this._url)
        .map(res => <IUser[]> res.json())
    }
}