import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './app/home/home.component'
import { CounterComponent } from './app/counter/counter.component';


const routes : Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
