import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { PostService } from '../post.service';  
import { Post } from '../post';  


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  allPosts: Observable<Post[]>;
  constructor(private postService: PostService ) { }

  ngOnInit() {
    this.loadAllPosts();
  }

  loadAllPosts() {  
    this.allPosts = this.postService.getAllPost();
    console.log('yues');
    console.log(this.allPosts);  
  }  

}
