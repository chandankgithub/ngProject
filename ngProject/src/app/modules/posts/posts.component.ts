import { Component, OnInit } from '@angular/core'

import 'rxjs/add/operator/delay'
import { Post } from './post'
import { PostService } from './post.service'

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit{
    private _posts:Post[];
    private _networkDown:boolean=false;
    private _isLoading: boolean=true;

    constructor(private _service: PostService){
        
    }

    ngOnInit(){
        this._service.getPosts()
            .delay(2000) //Dummy. To show only loading icon
            .subscribe( p => this.bindPosts(p),
            (err) => {
                        this.bindDefaultPosts();
                    })
    }

    bindPosts(posts: Post[]){
        this._posts = posts;
        this._isLoading=false;
    }

    bindDefaultPosts(){
        this._networkDown= true;
        this._isLoading=false
        this._posts = this._service.getDefaultPosts();
    }
}