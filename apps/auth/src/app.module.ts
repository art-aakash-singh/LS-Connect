import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ErrorHandlerFilter } from './api/global/service/error-handler.filter';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ApiModule],
  controllers: [AppController],
  providers: [ErrorHandlerFilter],
})
export class AppModule {}
