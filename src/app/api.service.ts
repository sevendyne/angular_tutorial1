import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com'; // Example API endpoint

  constructor(private http: HttpClient) {}

  // Fetch data from API
  fetchData(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError) // Call the error handling function
    );
  }

  private handleError(error: HttpErrorResponse) {
    // let errorMessage = '';
    // if (error.error instanceof ErrorEvent) {
    //   // Client-side error
    //   errorMessage = `Error: ${error.error.message}`;
    // } else {
    //   // Server-side error
    //   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    // }
    // console.error(errorMessage);
    console.error('Error occurred:', error.message);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
