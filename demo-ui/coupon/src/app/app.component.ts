import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coupon';
  username: String = '';

  constructor() { }

  ngOnInit(): void {
    this.username = atob(decodeURIComponent(window.location.search.split('=')[1])).split('=')[1]
  }

}
