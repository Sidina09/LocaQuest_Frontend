import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'questions');
  }
  
  postQuestions(data: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'questions', data);
  }
  
}
