// src/app/auth.service.ts
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}


  login(username: string, password: string): boolean {
    // Dummy credentials for now
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']); // Redirect to login on logout
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
