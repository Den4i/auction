import {Component} from '@angular/core';
import {Product, ProductService} from './services/product.service';


@Component({
  selector: 'auction-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auction';
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }
}
