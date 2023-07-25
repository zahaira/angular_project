import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUserData(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users");
  }

  
}
