import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(protected _http: HttpClient) {
  }

  public listPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this._http.get(url);
  }

  public getPost(id) {
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    return this._http.get(url);
  }
}
