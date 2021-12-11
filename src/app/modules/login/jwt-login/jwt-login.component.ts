import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtAuthService } from 'src/app/services/auth/jwt-auth/jwt-auth.service';

@Component({
  selector: 'app-jwt-login',
  templateUrl: './jwt-login.component.html',
  styleUrls: ['./jwt-login.component.scss'],
})
export class JwtLoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private jwtAuthService: JwtAuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn();
  }

  login(): void {
    if (this.loginForm.valid) {
      this.jwtAuthService.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

  isLoggedIn() {
    this.jwtAuthService.isLoggedIn();
  }
}
