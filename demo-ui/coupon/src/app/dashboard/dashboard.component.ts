import { Component, OnInit } from '@angular/core';
import { Coupon } from '../models/coupon.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  public data: Coupon[] = [];

  ngOnInit(): void {
    this.httpService.getAllCoupons().subscribe(response => {
      this.data = response
      console.log(this.data);
    });
  }

}
