import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class User {
  
  name: string;
  dob: Date;
  phone: number;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(private httpClient : HttpClient) { }
  create(employee): Observable<User> {
    return this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
      this.postId = data.id;
  })

  }  

}
