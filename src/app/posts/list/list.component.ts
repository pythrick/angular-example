import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../models/post.model';
import {PostsService} from '../../services/posts.service';
import {ListResponseModel} from '../../models/list-response.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: PostModel[] = [];
  status = '';

  constructor(private _postsService: PostsService) {
    this.listPosts();
  }

  ngOnInit() {
  }

  private listPosts() {
    this.status = 'Searching for posts, please wait for a while...';
    this._postsService.listPosts()
      .subscribe(
        (posts: PostModel[]) => {
          this.status = '';
          this.posts = [];
          for (const post of posts) {
            this.posts.push(post);
          }
        },
        error => {
          this.status = 'No posts found.';
          console.log(error);
        }
      );
  }


}
