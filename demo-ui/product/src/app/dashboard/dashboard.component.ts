import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/products';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productList: Product[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAllProducts().subscribe(response => {
      this.productList = response;
    })
  }
}
