import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly TOKEN_KEY = 'auth_token';

  // Save token to local storage
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Get token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Remove token from local storage
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Check if the token exists
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
