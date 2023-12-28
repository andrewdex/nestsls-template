import { Injectable } from '@nestjs/common';
import { Post } from './app.types';

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

  async getPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  }
}
