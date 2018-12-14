import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService, Review} from '../../services/product.service';

@Component({
  selector: 'auction-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  reviews: Review[];
  constructor(private router: ActivatedRoute, private productService: ProductService) {
    const prodId = parseInt(router.snapshot.params['id'], 10);
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsForProduct(this.product.id);
  }

  ngOnInit() { }

}
