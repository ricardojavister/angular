import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://127.0.0.1:5500/data.json';
  constructor(private http: HttpClient) { }

  getAllPost(): Observable<Post[]> {  
    return this.http.get<Post[]>(this.url);  
  }  

  getAllPost2(): any{  
    this.http.get(this.url)
      .subscribe(
        result => {
          return result;
        },
        error => {
          console.log('problemas');
        }
      );
  }  
}
