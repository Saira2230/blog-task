import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'posts',
    loadComponent: () => import('./post-list/post-list.component').then(m => m.PostListComponent)
  },
  {
    path: 'user/:id',
    loadComponent: () => import('./user-detail/user-detail.component').then(m => m.UserDetailComponent)
  }
];

