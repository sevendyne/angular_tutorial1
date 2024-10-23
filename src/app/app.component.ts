// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { SharedService } from './shared.service';
import { ChangeBackgroundColorDirective } from './change-background-color.directive';
import { TitleCasePipe } from './title-case.pipe';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, CounterComponent, RouterModule, CommonModule, ChangeBackgroundColorDirective, TitleCasePipe]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  outputMessage: string = '';
  count = 0; // Initial count for two-way binding

  constructor(private sharedService: SharedService, private authService: AuthService) {}

  ngOnInit() {
    // Subscribe to the shared service message changes
    this.sharedService.currentMessage.subscribe((message: string) => {
      this.outputMessage = message;
    });
  }

  // Handle count changes emitted from child (Two-way binding)
  handleCountChange(newCount: number) {
    this.count = newCount; // Update the count in the parent component
    alert(newCount);
  }

  // Logout functionality
  logout() {
    this.authService.logout(); // Logs out and redirects to login page
    
  }
}
