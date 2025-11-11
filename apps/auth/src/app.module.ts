import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ErrorHandlerFilter } from './api/global/service/error-handler.filter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ErrorHandlerFilter],
})
export class AppModule {}
