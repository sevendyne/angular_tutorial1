import { Component } from '@angular/core';

import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, // Declare this as standalone
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent {
  constructor(private sharedService: SharedService) {}
  items: string[] = ['Item 1', 'Item 2', 'Item 3']; // List of items for *ngFor demonstration

  onButtonClick() {
    const message = 'Button clicked by Ansif!!!';
    // Use the shared service to update the message
    this.sharedService.changeMessage(message);
  }
}
