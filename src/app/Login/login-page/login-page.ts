import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  username = '';
  password = '';

  clearFields(){
    this.username='';
    this.password='';
  }
constructor(private router:Router){}

  login() {
    // Simple hardcoded login validation
    if (this.username === 'admin' && this.password === '123') {
      alert('Login Successful!');
      this.clearFields();
      this.router.navigate(['/dashboard'])      
    } else {
      alert('Invalid Username or Password!');
    }
  }
}
