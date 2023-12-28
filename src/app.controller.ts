import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from './app.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): {
    message: string;
    date: string;
  } {
    return this.appService.getHello();
  }

  @Get('/posts')
  getPosts(): Promise<Post[]> {
    return this.appService.getPosts();
  }
}
