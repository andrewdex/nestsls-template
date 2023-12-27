import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toStrictEqual({
        message: 'Hello World! API v1.0.0',
        date: expect.any(String),
      });
    });
  });

  describe('products', () => {
    it('should return products', () => {
      expect(appController.getProducts()).toStrictEqual([
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
      ]);
    });
  });
});
