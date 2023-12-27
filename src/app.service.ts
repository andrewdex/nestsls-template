import { Injectable } from '@nestjs/common';
import { Product } from './app.types';

@Injectable()
export class AppService {
  getHello(): {
    message: string;
    date: string;
  } {
    return {
      message: 'Hello World! API v1.0.0',
      date: new Date().toISOString(),
    };
  }

  getProducts(): Product[] {
    return [
      {
        productName: 'Product 32%',
        productDescription: '32% Product',
        productPrice: 10,
      },
      {
        productName: 'Product 36%',
        productDescription: '36% Product',
        productPrice: 10,
      },
      {
        productName: 'Product 40%',
        productDescription: '40% Product',
        productPrice: 10,
      },
    ];
  }
}
