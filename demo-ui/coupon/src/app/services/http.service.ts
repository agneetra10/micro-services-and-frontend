import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:  HttpClient) { }

  private serverUrl = 'http://localhost:9095/couponapi'

  getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${this.serverUrl}/coupons`)
  }

  createCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(`${this.serverUrl}/coupons`,  coupon)
  }

  getCouponByCode(code: String): Observable<Coupon> {
    return this.httpClient.get<Coupon>(`${this.serverUrl}/coupons/${code}`)
  }

}
