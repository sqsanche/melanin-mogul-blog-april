import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts: any[] = [
    { loading: true },
   /* { loading: true },
    { loading: true },*/
  
    
  ];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getItems()
      .subscribe(res => this.posts = res)
  }
}