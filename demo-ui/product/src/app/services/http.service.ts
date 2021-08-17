import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private productServerUrl = 'http://localhost:9095/productapi'
  private couponServerUrl = 'http://localhost:9095/couponapi'
  
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.productServerUrl}/products`, product)
  }

  getAllCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.couponServerUrl}/coupons`)
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productServerUrl}/products`)
  }

}
