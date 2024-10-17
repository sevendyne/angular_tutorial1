import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; 
import { CounterComponent } from './counter/counter.component';

import { RouterModule } from '@angular/router';

import { SharedService } from './shared.service';
import { CommonModule } from '@angular/common';

import { ChangeBackgroundColorDirective } from './change-background-color.directive';
import { TitleCasePipe } from './title-case.pipe'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponent, CounterComponent, RouterModule, CommonModule, ChangeBackgroundColorDirective, TitleCasePipe]
})
export class AppComponent {
  outputMessage: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // Subscribe to the shared service message changes
    this.sharedService.currentMessage.subscribe((message: string) => {
      this.outputMessage = message;
    });
  }

  count = 0; // Initial count for two-way binding

  // Handle count changes emitted from child (Two-way binding)
  handleCountChange(newCount: number) {
    this.count = newCount; // Update the count in the parent component
    alert(newCount);
  }
}

