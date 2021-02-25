import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { fbObjects } from './shared/intrfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  tokenInfo = new JwtHelperService();

  constructor(private http: HttpClient) { }

  signIn({login, password}: fbObjects): Observable<object> {
    return this.http.post(environment.baseUrl + '/auth/signin', {username: login, password}).pipe(
      tap((value) => {
        localStorage.setItem('access_token', value['accessToken']);
      })
    );
  }

  signUp({login, password}: fbObjects): Observable<object> {
    return this.http.post(environment.baseUrl + '/auth/signup', {username: login, password});
  }

  isAuthorized(): boolean {
    return !this.tokenInfo.isTokenExpired(localStorage.getItem('access_token'))
  }
}
