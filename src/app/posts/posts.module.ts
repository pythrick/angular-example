import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import {PostsService} from '../services/posts.service';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'posts',
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: ':id',
        component: DetailComponent
      }
    ]
  }
];



@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [PostsService]
})
export class PostsModule { }
