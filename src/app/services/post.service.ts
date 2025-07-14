import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postURL = 'https://jsonplaceholder.typicode.com/posts'
  private userURL ='https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient){}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.postURL);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userURL);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.userURL}/${id}`);
  }
}
