import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }
  sendSignUpData(data): Observable<any> {
    return this.http.post("http://localhost:8080/bank/signup", data);
  }
}
