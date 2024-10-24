import { Component } from '@angular/core';

import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class HomeComponent {
  reactForm: FormGroup;
  
  constructor(private sharedService: SharedService, private fb: FormBuilder) {
    // Define the form with FormArray for dynamic fields
    this.reactForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      items: this.fb.array([]) // Add a FormArray to hold dynamic items
    });
  }

  // Getter for the items FormArray
  get items(): FormArray {
    return this.reactForm.get('items') as FormArray;
  }

  // Method to add a new item to the FormArray
  addItem() {
    const itemControl = this.fb.control('', Validators.required); // New control with required validation
    this.items.push(itemControl); // Add to the FormArray
  }

  // Method to remove an item from the FormArray
  removeItem(index: number) {
    this.items.removeAt(index); // Remove item at the specified index
  }

  // SharedService message handler
  onButtonClick() {
    const message = 'Button clicked by Ansif!!!';
    this.sharedService.changeMessage(message);
  }

  // Basic form submission
  onBasicFormSubmit(form: NgForm) {
    console.log('Basic Form Submitted!', form.value);
  }

  // Reactive form submission
  onReactiveFormSubmit() {
    if (this.reactForm.valid) {
      console.log('Reactive Form Submitted!', this.reactForm.value);
      // Handle form submission logic here
    }
  }
}
