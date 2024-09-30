import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';

// Declare and export routes so they can be used elsewhere
export const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
