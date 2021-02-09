import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/post.interface';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {


  posts: Post[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<Post[]>('http://localhost:4200/EducanetWebik/api/users')
      .subscribe((data) => {
        console.log(data);
        this.posts = data;
      });
  }
  post(): void {
    this.httpClient.post('http://localhost:4200/EducanetWebik/api/users/register', {})
      .subscribe((data) => {
        console.log(data);
      });
  }
  put(): void {
    this.httpClient.put('http://localhost:4200/EducanetWebik/api/users/', {})
      .subscribe((data) => {
        console.log(data);
      });
  }
  delete(): void {
    this.httpClient.delete('http://localhost:4200/EducanetWebik/api/users/logout', {})
      .subscribe((data) => {
        console.log(data);
      });
  }
}
