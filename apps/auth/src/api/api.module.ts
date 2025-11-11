import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { LoginModule } from './v1/login/login.module';
import { V1Module } from './v1/v1.module';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        module: LoginModule,
      },
    ],
  },
];

@Module({
  imports: [RouterModule.register(routes), V1Module],
})
export class ApiModule {}
