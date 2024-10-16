import { Component } from '@angular/core';

import { SharedService } from '../shared.service';

@Component({
  standalone: true, // Declare this as standalone
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private sharedService: SharedService) {}

  onButtonClick() {
    const message = 'Button clicked by Ansif!!!';
    // Use the shared service to update the message
    this.sharedService.changeMessage(message);
  }
}
