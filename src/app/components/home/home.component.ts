import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../../services/product.service';
import {debounceTime} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'auction-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  titleFilter: FormControl = new FormControl('');
  filterCriteria = '';

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();

    this.titleFilter.valueChanges
      .pipe(debounceTime(100))
      .subscribe(
        value => this.filterCriteria = value,
        error => console.error(error)
      );
  }


  ngOnInit() {
  }

}
