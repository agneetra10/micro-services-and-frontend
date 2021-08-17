import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string | null = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username')
  }

  navigateToApp(appContext: String): void {
    this.router.navigate([appContext], { queryParams: { appContext, username: localStorage.getItem('username') } })
  }

  doLogout(): void {
    localStorage.clear()
    this.router.navigate(['login'])
  }

}
