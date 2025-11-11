import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { LoginController } from './login/login.controller';

@Module({
  imports: [LoginModule],
  controllers: [LoginController],
})
export class V1Module {}
