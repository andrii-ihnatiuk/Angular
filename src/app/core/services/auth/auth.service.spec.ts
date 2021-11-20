import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let router: Router;
  let http: HttpClient;
  type storeType = {
    [key: string]: string
  };
  const storage: storeType = {};

  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    http = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AuthService(http, router);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should navigate to login page on logout', () => {
    // * Given
    // * When
    service.logout();
    // * Then
    expect(router.navigate).toHaveBeenCalledOnceWith(['lr3/login']);
  });

  it('should remove token on logout', () => {
    // * Given
    spyOn(localStorage, 'removeItem').and.callFake((key: string): void => {
      delete storage[key];
    });
    // * When
    service.logout();
    // * Then
    expect(localStorage.removeItem).toHaveBeenCalledOnceWith('access_token');
  });

  it('should set token to localStorage', () => {
    // * Given
    const tokenExample = '12345';
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string): string => {
      return storage[key] = value;
    });
    // * When
    service.setToken(tokenExample);
    // * Then
    expect(localStorage.setItem).toHaveBeenCalledOnceWith('access_token', tokenExample);
  });

  it('should return token from localStorage', () => {
    // * Given
    spyOn(localStorage, 'getItem').and.callFake((key: string): string => {
      return storage[key];
    });
    // * When
    service.getToken();
    // * Then
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('should be called before setInOut', () => {
    // * Given
    spyOn(service, 'setInOut').and.returnValue();
    spyOn(service, 'logout').and.callThrough();
    // * When
    service.logout();
    // * Then
    expect(service.logout).toHaveBeenCalledBefore(service.setInOut);
  });

});
