import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!request.url.startsWith('https://api.openweathermap.org')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => this.handleAuthError(error))
    );
  }

  private handleAuthError(err: HttpErrorResponse) {
    if (err.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error);
    } 
    else if (err.status === 401) {
      if (!this.authService.getToken()) {
        this.router.navigate(['/lr3/login']);
      } else {
        if (this.authService.isTokenExpired()) {
          this.router.navigate(['/lr3/login']);
          alert('Ваша сессия была завершена, повторите вход.');
          this.authService.logout(); // Очищаем local storage чтобы alert не появлялся вновь
        }
      }
    } 
    
    return throwError(err);
  }
}
