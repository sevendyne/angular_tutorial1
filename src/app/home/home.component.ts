import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true, // Declare this as standalone
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() title: string = '';
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  onButtonClick() {
    this.buttonClicked.emit('Button clicked! The current title is: ' + this.title);
  }
}
