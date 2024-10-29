// src/app/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: { Authorization: 'Bearer dummy-token' } // Dummy token for demonstration
  });

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.error('Unauthorized access - maybe redirect to login?');
      } else if (error.status === 404) {
        console.error('API not found');
      } else {
        console.error('An unknown error occurred:', error);
      }
      return throwError(() => new Error('An error occurred; please try again later.'));
    })
  );
};
