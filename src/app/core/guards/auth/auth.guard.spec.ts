import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['getToken', 'isTokenExpired', 'logout']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
