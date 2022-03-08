import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:9090/authenticate'

  currentUser: any = null;


  constructor(private http: HttpClient) { }

  loginUser(login: Login): Observable<any> {
    return this.http.post<any>(this.url, login)
      .pipe(
        (map(
          (user: any) => {

            this.currentUser = user.userName;
            sessionStorage.currentUser 
            = JSON.stringify(user);
          }
        ))
      )
  }

  isUserLoggedIn() {
    if (this.currentUser !== null) {
      return true
    }
    else {
      return false;
    }
  }

  logoutUser() {
    sessionStorage.removeItem("currentUser")
    this.currentUser = null;
  }
}
