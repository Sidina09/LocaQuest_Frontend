import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
   }

   getUsers(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'users');
  }
  
  postUsers(data: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'users', data);
  }

}
