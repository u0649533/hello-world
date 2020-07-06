import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  list: any[];
  constructor(private service: PostService, private router: Router, private route: ActivatedRoute) {
  }
  flag = true;
  show(){
    if(this.flag){
    this.router.navigate(['archiveDetail'],{relativeTo: this.route});
  }else{
    this.router.navigate(['posts']);}
    this.flag = !this.flag;
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
    this.route.data.subscribe((inputData: any) => {
      this.list =  inputData.data;
    })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else throw error;
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    this.service.delete(post.id);
  }
}
