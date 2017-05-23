import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'


import { User } from './User'

@Injectable()
export class UserService{
    _url:string = "https://jsonplaceholder.typicode.com/users"
    constructor(private _http: Http){

    }
    
    getUsers(): Observable<User[]>{
        return this._http.get(this._url)
        .map(res => <User[]> res.json())
    }

    addUser(user:any):Observable<User[]>{
        console.log(user)
        return this._http.post(this._url, JSON.stringify(user))
			.map(res => <User[]> res.json());
    }
    
    getUser(id:number): Observable<User>{
        return this._http.get(this._url + '/' + id)
                .map( response => <User> response.json())
    }
}