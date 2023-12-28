import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // This will enable CORS for all routes
  app.setGlobalPrefix('/api'); // This will be your API's root URL
  await app.listen(3000);
}
bootstrap();
