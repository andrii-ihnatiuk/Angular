import { TestBed } from '@angular/core/testing';
import { AuthService } from '../../services/auth/auth.service';

import { PrefsGuard } from './prefs.guard';

describe('PrefsGuard', () => {
  let guard: PrefsGuard;
  let authService: AuthService;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['isTokenExpired', 'getUserRole']);

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authService }
      ]
    });
    guard = TestBed.inject(PrefsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
