import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/api/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css'],
})
export class AppNavbarComponent {
  public readonly isAuthorized$ =
    this._authService.isAuthorized$.asObservable();

  constructor(private readonly _authService: AuthService) {}

  public handleLogout(): void {
    this._authService.logout();
  }
}
