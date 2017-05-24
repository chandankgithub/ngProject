import { Component, OnInit } from '@angular/core'

import 'rxjs/add/operator/delay'
import { Post } from './post'
import { PostComment } from './post-comment'
import { PostService } from './post.service'

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styles:[
        `
           .posts	li	{	cursor:	pointer;	}
            .posts	li:hover	{	background:	#ecf0f1;	}	
            .list-group-item.active,	
            .list-group-item.active:hover,	
            .list-group-item.active:focus	{	
                background-color:	#ecf0f1;
                border-color:	#ecf0f1;	
                color:	#2c3e50;
            } 
        `
    ]
})
export class PostsComponent implements OnInit{
    private _posts:Post[];
    private _networkDown:boolean=false;
    private _postsLoading: boolean=true;
    private _isCommentLoading:boolean=true;
    private _selectedIndex: number;
    private _postTitle: string;
    private _postBody: string;
    private _showPostDetail:boolean = false;
    private _comments: PostComment[]

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
        this._postsLoading=false;
    }

    bindDefaultPosts(){
        this._networkDown= true;
        this._postsLoading=false
        this._posts = this._service.getDefaultPosts();
    }

    selectPostItem(post:Post, index:number){
        this._selectedIndex=index;
        this._postTitle=post.title;
        this._postBody=post.body;
        this._showPostDetail=true;

        this.getComments(post);
    }

    getComments(post:Post){
        this._isCommentLoading=true;
        this._comments=[];
        this._service.getPostCommentsById(post)
        .delay(500)
            .subscribe(comments => this.bindPostComments(comments),
            (err) => console.log(err))
    }

    bindPostComments(comments: PostComment[]){
        console.log(comments);
        this._isCommentLoading=false;
        this._comments = comments;
    }
}