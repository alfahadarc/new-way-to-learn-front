import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  tokenData: any;
  
  constructor(private fb: FormBuilder, private authService:AuthService, private route:Router) {}


  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (data) => {
        this.tokenData = data;
        localStorage.setItem('token', this.tokenData.token);
        this.authService.setLoggedIn();
        this.route.navigateByUrl("/dashboard")
       
      },
      error: (error) => {
        console.log(error);

      }
    });
  }

}
