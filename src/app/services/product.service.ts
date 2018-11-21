import {Injectable} from '@angular/core';

export interface Product {
  title: string;
  price: number;
  description: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  testProduct: Product = {
    title: 'заголовок',
    price: 3,
    description: 'описание',
    rating: 4
  };

  constructor() {
  }

  getProducts(): Product[] {
    return [this.testProduct];
  }
}
