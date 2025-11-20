import { Logger } from '@nestjs/common';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs'; 
import { V1Module } from './api/v1/v1.module';

async function bootstrap() {
  // const httpsOptions = {
  //   key: fs.readFileSync('apps/auth/src/assets/server.key'),
  //   cert: fs.readFileSync('apps/auth/src/assets/server.crt'),
  //   ca: fs.readFileSync('apps/auth/src/assets/ca.crt'),
  //   requestCert: true,
  //   rejectUnauthorized: true,
  // };

  //const app = await NestFactory.create(AppModule, { httpsOptions });
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Enable API versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // Swagger setup
  const v1Config = new DocumentBuilder()
    .setTitle('ls connect Auth API')
    .setDescription('API documentation for the ls connect auth microservice')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const v1Document = SwaggerModule.createDocument(app, v1Config, { include: [V1Module] });
  const swaggerPath = `${globalPrefix}/v1/docs`;
  SwaggerModule.setup(swaggerPath, app, v1Document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
