import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  faLock = faLock;
  ResetForm = new FormGroup({
    email: new FormControl(''), 
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(): void {
    if (this.ResetForm.valid) {
      this.auth.login(this.ResetForm.value).subscribe(
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
}
