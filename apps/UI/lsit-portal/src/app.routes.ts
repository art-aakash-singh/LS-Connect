import { Login } from '@/pages/auth/login';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: '', component: Login },
    { path: '**', redirectTo: '/notfound' }
];
