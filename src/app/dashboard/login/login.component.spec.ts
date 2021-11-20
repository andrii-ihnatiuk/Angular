import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router'; 
import { FormBuilder } from '@angular/forms'

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;
  let fb: FormBuilder;

  beforeEach(async () => {
    authService = jasmine.createSpyObj('AuthService', ['login', 'setToken', 'setInOut']);
    router = jasmine.createSpyObj('Router', ['navigate']);
    fb = jasmine.createSpyObj('FormBuilder', ['group']);

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router },
        { provide: FormBuilder, useValue: fb }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
