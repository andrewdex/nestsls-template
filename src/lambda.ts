import { Handler } from 'aws-lambda';
import { createServer, proxy } from 'aws-serverless-express';
import { AppModule } from './app.module';
import * as express from 'express';
import { NestFactory } from '@nestjs/core/nest-factory';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Server } from 'http';

const server = express();

async function bootstrap(): Promise<Server> {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors();
  app.setGlobalPrefix('/api'); // This will be your API's root URL
  await app.init();
  return createServer(server);
}

let cachedServer: Server;

export const handler: Handler = async (event, context) => {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
