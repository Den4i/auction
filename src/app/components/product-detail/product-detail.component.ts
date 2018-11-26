import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'auction-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productID: string;

  constructor(private router: ActivatedRoute) {
    this.productID = router.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
