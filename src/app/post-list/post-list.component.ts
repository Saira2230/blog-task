import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ShowButtonDirective } from '../directives/show-button.directive';


@Component({
  standalone: true,
  selector: 'app-post-list',
  imports: [CommonModule, ShowButtonDirective],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{


posts: any[] = []; 
  users: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });

    this.postService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  getAuthorName(userId: number): string {
    const user = this.users.find(u => u.id === userId);
    return user ? user.name : 'Unknown';
  }
}
  


