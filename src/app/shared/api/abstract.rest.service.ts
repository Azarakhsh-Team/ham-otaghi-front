import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AbstractRESTService {
  protected readonly _serverUrl: string;

  constructor(
    protected readonly _http: HttpClient,
    protected readonly _storageService: StorageService
  ) {
    // this._serverUrl = 'https://ham-otaghi-back.joobkenar.ir';
    this._serverUrl = 'https://hamotaghifind.liara.run';
  }

  protected setHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Language': 'fa',
    });
  }

  protected setAuthorizedHeaders(): HttpHeaders {
    const _accessToken = this._storageService.getAccessToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${_accessToken}`,
      'Accept-Language': 'fa',
    });
  }
}
