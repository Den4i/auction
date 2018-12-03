import {Injectable} from '@angular/core';

export interface Product {
  id: number;
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
    id: 1,
    title: 'Кубок',
    price: 3,
    description: 'Древняя реликвия',
    rating: 4
  };

  constructor() {
  }

  getProducts(): Product[] {
    return [this.testProduct];
  }
}
