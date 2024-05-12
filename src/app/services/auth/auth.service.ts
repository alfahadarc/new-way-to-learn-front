import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUrl } from '../../../config/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private http: HttpClient) { }


 public login(data: any) {
    return this.http.post(loginUrl, data);
  }

  public setLoggedIn() {
    this.isLoggedIn = true;
  }

  public logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
  }
}
