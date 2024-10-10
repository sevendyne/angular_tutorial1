import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true, // Declare this as standalone
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [FormsModule]
})
export class CounterComponent implements OnInit, OnDestroy {
  @Input() count: number = 0;  // Input property for count, passed from parent
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>(); // Output Binding: For two-way binding count change
 
  // ngModel for Two-way binding of the counter
  ngOnInit(): void {
    console.log('Counter Component Initialized');
  }

  ngOnDestroy(): void {
    console.log('Counter Component Destroyed');
  }

  // Increment count
  increment() {
    this.count++;
    this.countChange.emit(this.count); // Emit count change to parent
  }

  // Decrement count
  decrement() {
    if (this.count > 0) {
      this.count--;
      this.countChange.emit(this.count); // Emit count change to parent
    }
  }

  // Reset count
  reset() {
    this.count = 0;
    this.countChange.emit(this.count); // Emit count change to parent
  }
}
