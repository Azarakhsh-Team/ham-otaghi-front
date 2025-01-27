import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../api/auth.service';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _toastrService: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._authService.isAuthorized$.pipe(
      map((isAuthorized) => {
        if (!isAuthorized) {
          this._toastrService.error(
            'برای دسترسی به این صفحهه باید ابتدا وارد حساب کاربری خود شوید.'
          );
          return this._router.parseUrl('/auth/login');
        }
        return true;
      })
    );
  }
}
