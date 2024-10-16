import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { CounterComponent } from './counter/counter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponent,CounterComponent, RouterModule]
})
export class AppComponent {
  title = 'Angular Day3';
  outputMessage: string = '';
  

  handleButtonClick(event: string) {
    this.outputMessage = event;
    alert(event);
  }

  count = 0; // Initial count for two-way binding

  // Handle count changes emitted from child (Two-way binding)
  handleCountChange(newCount: number) {
    this.count = newCount; // Update the count in the parent component
    alert(newCount);
  }
  
}