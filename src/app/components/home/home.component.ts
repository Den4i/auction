import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../../services/product.service';

@Component({
  selector: 'auction-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }


  ngOnInit() {
  }

}
