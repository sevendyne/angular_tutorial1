// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AuthComponent } from './app/auth/auth.component';
import { AuthGuard } from './app/auth.guard';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/auth/auth.interceptor';

const routes: Route[] = [
  { path: 'login', component: AuthComponent },
  {
    path: 'home',
    loadComponent: () => import('./app/home/home.component').then(m => m.HomeComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'counter',
    loadComponent: () => import('./app/counter/counter.component').then(m => m.CounterComponent),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
}).catch((err) => console.error(err));
