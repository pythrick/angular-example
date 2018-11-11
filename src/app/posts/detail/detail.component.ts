import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PostModel} from '../../models/post.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  post: PostModel;

  constructor(
    private _postService: PostsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,

  ) {
    this.post = new PostModel();
  }

  ngOnInit() {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    this.getPost(id);
  }

  private getPost(id) {
    this._postService.getPost(id).subscribe(
      (post: PostModel) => {
        this.post = post;
      }, err => {
        this._router.navigateByUrl('/404');
      }
    );
  }
}
