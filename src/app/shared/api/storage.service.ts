import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public getAccessToken(): string | null {
    return localStorage.getItem('hamotaghiAccessToken');
  }

  public setAccessToken(token: string): void {
    localStorage.setItem('hamotaghiAccessToken', token);
  }

  public removeAccessToken(): void {
    localStorage.removeItem('hamotaghiAccessToken');
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem('hamotaghiRefreshToken');
  }

  public setRefreshToken(token: string): void {
    localStorage.setItem('hamotaghiRefreshToken', token);
  }

  public removeRefreshToken(): void {
    localStorage.removeItem('hamotaghiRefreshToken');
  }
}
