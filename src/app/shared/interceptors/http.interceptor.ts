import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private openRequests: Set<HttpRequest<unknown>> = new Set();

  constructor(private readonly _loadingService: LoadingBarService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.openRequests.add(request);
    this._loadingService.useRef().start();

    return next.handle(request).pipe(
      finalize(() => {
        this.openRequests.delete(request);

        if (this.openRequests.size === 0) {
          this._loadingService.useRef().stop();
        }
      })
    );
  }
}
