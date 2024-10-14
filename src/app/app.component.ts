import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponent,CounterComponent]
})
export class AppComponent {
  title = 'Angular Day3';
  outputMessage: string = '';
  

  handleButtonClick(event: string) {
    this.outputMessage = event;
    // alert(event);
  }
  
}