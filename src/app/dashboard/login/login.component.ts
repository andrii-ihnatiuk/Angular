import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    const val = this.form.value;

    if (val.login && val.password) {
        this.authService.login(val.login, val.password)
        .subscribe((data: any) => {
          var token = data.access_token;
          if (typeof(token) == 'string' && token.length != 0) {
            this.authService.setToken(token);
            this.router.navigate(['lr3'])
            this.authService.setInOut();
          }
        },
        (err: any) => {
          alert("Wrong login or password!");
        })
    }
}
  
}
