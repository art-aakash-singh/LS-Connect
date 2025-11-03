import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { LoginModule } from './login/login.module';

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
  imports: [RouterModule.register(routes), LoginModule],
})
export class ApiModule {}
