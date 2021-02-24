import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  saveRegisterForm(): Observable<object> {
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.get('http://localhost:3000/tasks', { headers }).pipe(
      tap((value) => {
        console.log('Tapped: ', value);
      })
    );
  }
}
