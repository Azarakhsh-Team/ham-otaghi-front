import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/api/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly _toastrService: ToastrService,
    private readonly _authService: AuthService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred';

        if (error.status >= 500) {
          // Server-side error
          errorMessage = `خطای سرور: ${error.status}`;
        } else if (error.status === 401) {
          errorMessage = `خطای دسترسی: باید وارد حساب کاربری خود شوید.`;
          this._authService.logout();
        } else if (error.status >= 400) {
          // Client-side error
          errorMessage = `خطا: ${Object.keys(error.error).join(', ')}`;
        }

        this._toastrService.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
