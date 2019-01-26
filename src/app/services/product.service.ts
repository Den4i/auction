import {Injectable} from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  rating: number;
  categories: string [];
}

export interface Review {
  id: number;
  productId: number;
  timestamp: string;
  user: string;
  rating: number;
  comment: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 0,
      title: 'Кубок',
      price: 3,
      description: 'Древняя реликвия',
      rating: 4,
      categories: ['Антиквариат']
    },
    {
      id: 1,
      title: 'Second Product',
      price: 64.99,
      rating: 3.5,
      description: 'This is a short description.',
      categories: ['books']
    }
  ];

  reviews = [
    {
      id: 0,
      productId: 0,
      timestamp: new Date().toString(),
      user: 'User 1',
      rating: 5,
      comment: 'Aenean vestibulum velit'
    },
    {
      id: 1,
      productId: 0,
      timestamp: new Date().toString(),
      user: 'User 2',
      rating: 3,
      comment: 'Aenean vestibulum velit id'
    }];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find(p => p.id === id);
  }

  getReviewsForProduct(productId: number): Review [] {
    return this.reviews.filter(
      r => r.productId = productId
    );
  }
}
