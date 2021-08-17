import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Coupon } from '../models/coupon.model';
import { Product } from '../models/product.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name: string = '';
  description: string = '';
  couponCode: string = '';
  price: number = 0;

  coupons: Coupon[] = []
  
  constructor(private httpService: HttpService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAllCoupons().subscribe(response => {
      this.coupons = response;
    })
  }

  createProductData(): Product {
    const product: Product = {
      name: this.name,
      description: this.description,
      couponCode: this.couponCode,
      price: this.price
    }
    return product;
  }
  
  onSubmit() {
    const product = this.createProductData()
    console.log(product);
    this.name = '';
    this.description = '';
    this.price = 0;
    this.couponCode = '';
    this.httpService.addProduct(product).subscribe(response => {
      if (response.id)
      this.snackBar.open(`Successfully created Product with ID: ${response.id}`, 'dismiss').afterDismissed().subscribe(temp => {
        this.router.navigate(['home'])
      })
    else
      this.snackBar.open('Some error occurred', 'dismiss')
  }, err => {
    this.snackBar.open('Some error occurred', 'dismiss')
  })
  }

}
