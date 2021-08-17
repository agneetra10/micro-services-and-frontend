import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardServiceService } from '../service/authguard-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthguardServiceService) { }

  ngOnInit(): void {
    if (this.authService.gettoken() !== null) {
      this.router.navigate(['home'])
    }
  }

  formSubmit() {
    console.log(`username : ${this.username}, password : ${this.password}`)
    localStorage.setItem('username',this.username);
    localStorage.setItem('password',this.password);
    this.router.navigateByUrl("/home");
  }
}
