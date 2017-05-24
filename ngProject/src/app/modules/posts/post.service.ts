import { Injectable } from '@angular/core'
import { Http }  from '@angular/http'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map'
import { Post, DefaultPosts } from './post'

@Injectable()
export class PostService{
    private _getUrl:string= 'https://jsonplaceholder.typicode.com/posts'

    constructor(private _http:Http){

    }
    
    getPosts(): Observable<Post[]>{
        return this._http.get(this._getUrl)
                .map(response => <Post[]> response.json())
    }

    getDefaultPosts(): Post[]{
        return new DefaultPosts().getDefaultPosts()
    }
}