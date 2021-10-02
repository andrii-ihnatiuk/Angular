import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly accessTokenKey = 'access_token';
  private readonly userNameClaim = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name';
  private token: any;
  
  constructor(private httpClient: HttpClient, private router: Router) { }

  login(username: string, password: string): any {
    return this.httpClient.get(`https://pnitfunctions.azurewebsites.net/api/token?userName=${username}&password=${password}`);
  }

  logout(): void {
    localStorage.removeItem(this.accessTokenKey);
    this.router.navigate(['lr3/login']);
    this.setInOut();
  }

  isTokenExpired(): boolean {
    const helper = new JwtHelperService();
    let isExpired = true;
    
    if (!!this.getToken()) {
      this.token = this.getToken();
      if (this.token.length != 0) {
        isExpired = helper.isTokenExpired(this.token);
      }
    }
    return isExpired;
  }

  getToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  getUserRole(): string | null {
    var token = this.getToken();
    var tkn;

    const jwtHelperService = new JwtHelperService();
    if (token === null) {
      tkn = undefined;
    } else tkn = token;
    const decodedToken = jwtHelperService.decodeToken(tkn);

    console.log(decodedToken);

    return decodedToken[this.userNameClaim];
  }

  setToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token)
  }

  setInOut(): void {
    let login = document.getElementById('btn_login');
    let logout = document.getElementById('btn_logout');
    let reg = document.getElementById('btn_reg');
      
    if (this.getToken() != null && !this.isTokenExpired()) {
      if (login != null && logout != null && reg != null) {
        login.classList.add('hidden');
        reg.classList.add('hidden');
        logout.classList.remove('hidden');
      } 
    } else {
      if (login != null && logout != null && reg != null)  {
        login.classList.remove('hidden');
        reg.classList.remove('hidden');
        logout.classList.add('hidden');
      }
    }
  }


}
