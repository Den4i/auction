import {Component} from '@angular/core';
import {Product, ProductService} from './services/product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'auction-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auction';
  products: Product[] = [];

  constructor(private productService: ProductService, private _router: Router) {
    this.products = productService.getProducts();
  }

  navigateToProductDetail() {
    this._router.navigate(['/product']);
  }

}
