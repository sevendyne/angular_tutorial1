import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; 
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponent, CounterComponent]
})
export class AppComponent {
  title = 'Hello Angular';
  outputMessage: string = '';

  handleButtonClick(event: string) {
    this.outputMessage = event;
    // alert(event);
  }

  count = 0; // Initial count for two-way binding

  // Handle count changes emitted from child (Two-way binding)
  handleCountChange(newCount: number) {
    this.count = newCount; // Update the count in the parent component
  }
}

