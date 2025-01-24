import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from 'src/app/shared/api';
import { Auth } from '../models';
import { AuthRESTService } from './auth.rest.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly isAuthorized$ = new BehaviorSubject<boolean>(
    !!this._storageService.getAccessToken()
  );

  constructor(
    private readonly _storageService: StorageService,
    private readonly _restService: AuthRESTService,
    private readonly _router: Router,
    private readonly _toastrService: ToastrService
  ) {}

  public login(dto: Auth.LoginDto): void {
    this._restService.login(dto).subscribe({
      next: (response) => {
        this._storageService.setAccessToken(response.access);
        this._storageService.setRefreshToken(response.refresh);
        this.isAuthorized$.next(true);
        this._toastrService.success('با موفقیت وارد شدید!');
        this._router.navigateByUrl('/profile');
      },
      error: () => {
        this.isAuthorized$.next(false);
      },
    });
  }

  public logout(): void {
    this._storageService.removeAccessToken();
    this._storageService.removeRefreshToken();
    this.isAuthorized$.next(false);
    this._router.navigateByUrl('/auth/login');
  }

  public register(dto: Auth.RegisterDto): void {
    this._restService.register(dto).subscribe({
      next: (response) => {
        this._toastrService.success('ثبت نام با موفقیت انجام شد!');
        this._router.navigateByUrl('/auth/login');
      },
      error: () => {
        this.isAuthorized$.next(false);
      },
    });
  }
}
