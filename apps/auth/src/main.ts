import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorHandlerFilter } from './api/global/service/error-handler.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'auth';
  app.setGlobalPrefix(globalPrefix);
  const errorHandlerFilter = app.get(ErrorHandlerFilter);
  app.useGlobalFilters(errorHandlerFilter);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
