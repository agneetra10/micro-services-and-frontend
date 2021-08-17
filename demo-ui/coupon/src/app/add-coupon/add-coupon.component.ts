import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Coupon } from '../models/coupon.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  expiryDate: Date = new Date();
  code: string = '';
  discount: string = '';
  id?: number = 0;
  snapshot: ActivatedRouteSnapshot;

  constructor(private httpService: HttpService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute) {

    this.snapshot = route.snapshot;

  }

  ngOnInit(): void {
    if (this.router.url.includes('edit-coupon')) {
      this.httpService.getCouponByCode(this.snapshot.params['code']).subscribe(response => {
        this.expiryDate = new Date(response.expDate);
        this.code = response.code;
        this.id = response.id;
        this.discount = response.discount.toString();
      })
    }
  }

  createCouponData(): Coupon {
    const date = new Date(this.expiryDate);
    const month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const coupon: Coupon = {
      code: this.code,
      discount: Number(this.discount),
      expDate: `${month}/${day}/${date.getFullYear()}`
    }
    return coupon;
  }

  onSubmit() {
    const coupon = this.createCouponData();
    console.log(coupon);
    this.code = '';
    this.discount = '';
    this.expiryDate = new Date();
    if (this.router.url.includes('edit-coupon')) {
      coupon.id = this.id
    }
    this.httpService.createCoupon(coupon).subscribe(response => {
      if (response.id && response.id !== this.id)
        this.snackBar.open(`Successfully created coupon with ID: ${response.id}`, 'dismiss').afterDismissed().subscribe(temp => {
          this.router.navigate(['home'])
        })
      else if (response.id && response.id === this.id)
        this.snackBar.open(`Successfully updated coupon with ID: ${response.id}`, 'dismiss').afterDismissed().subscribe(temp => {
          this.router.navigate(['home'])
        })
      else
        this.snackBar.open('Some error occurred', 'dismiss')
    }, err => {
      this.snackBar.open('Some error occurred', 'dismiss')
    })
  }

}
