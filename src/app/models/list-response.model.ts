import {PostModel} from './post.model';


export class ListResponseModel {
  count: number;
  results: PostModel[];
}
