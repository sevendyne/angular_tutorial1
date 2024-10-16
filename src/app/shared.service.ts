// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // BehaviorSubject to hold and share data
  private messageSource = new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable();

  // Method to update the message
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
