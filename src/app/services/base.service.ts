import { Injectable, Injector } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router } from '@angular/router';
import { Api } from './Api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()

export class BaseService {

    public api: any = Api;
    public http: HttpClient;
    public router: Router;
    public barService: any;
    public alertService: any;
    public blockUiService: any;
    public authService: any;
    public httpHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        })
    };

    constructor(injector: Injector) {
        this.http = injector.get(HttpClient);
        this.router = injector.get(Router);
        this.barService = injector.get(LoadingBarService);
    }

    /**
     * This method will prepare get request.
     *
     * @param url
     * @param Header
     * @returns {Observable<HttpResponse<Object>>}
     */
    public httpGet(url, Header = null) {
        this.barService.start();
        return this.http.get(url, { observe: 'response', headers: Header });
    }

    public httpGetFile(url, Header = null) {
        this.barService.start();
        return this.http.get(url, { responseType: 'blob',observe: 'response', headers: Header });
    }

    /**
     * This method will prepare post request.
     *
     * @param url
     * @param body
     * @param options
     * @returns {Observable<Object>}
     */
    public httpPost(url, body, options = null) {
        this.barService.start();
        if (!options || (options && !options.observe)) {
            if (!options) {
                options = {};
            }
            options.observe = 'response';
        }
        return this.http.post<any>(url, body, options);
    }

    /**
     * This method will prepare put request.
     *
     * @param url
     * @param body
     * @param options
     * @returns {Observable<Object>}
     */
    public httpPut(url, body, options = null) {
        this.barService.start();
        if (!options || (options && !options.observe)) {
            if (!options) {
                options = {};
            }
            options.observe = 'response';
        }
        return this.http.put<any>(url, body, options);
    }

    /**
     * This method will prepare path request.
     *
     * @param url
     * @param body
     * @param options
     * @returns {Observable<Object>}
     */
    public httpPatch(url, body, options = null) {
        this.barService.start();
        if (!options || (options && !options.observe)) {
            if (!options) {
                options = {};
            }
            options.observe = 'response';
        }
        return this.http.patch<any>(url, body, options);
    }

    /**
     * This method will prepare delete request.
     *
     * @param url
     * @param options
     * @returns {Observable<ArrayBuffer>}
     */
    public httpDelete(url, options = null) {
        this.barService.start();
        if (!options || (options && !options.observe)) {
            if (!options) {
                options = {};
            }
            options.observe = 'response';
        }
        return this.http.delete<any>(url, options);
    }

    public httpGetWithoutBar(url, Header = null) {
        return this.http.get(url, {observe: 'response', headers: Header});
    }

    /**
     * This method will handle success response of API.
     *
     * @param response
     * @param observable
     * @constructor
     */
    public handleSuccessResponse(response, observable, isFile = false) {
        this.barService.complete();
        if (response.body || isFile || response.status == 204 || response.status == 200 || response.status == 201) {
            observable.next(response.body ? response.body : '');
            return observable.complete();
        }
        const tempModel = { Error: 'Some error returned unreadable' };
        return observable.error(JSON.stringify(tempModel));
    }

    public handleSuccessWithHeaderResponse(response, observable, isFile = false) {
        this.barService.complete();
        if (response.body || isFile || response.status == 204 || response.status == 200 || response.status == 201) {
            observable.next(response.body ? {body:response.body,type:response.headers.get('Content-Type')} : '');
            return observable.complete();
        }
        const tempModel = { Error: 'Some error returned unreadable' };
        return observable.error(JSON.stringify(tempModel));
    }

    /**
     * This method will handle error response of API.
     *
     * @param error
     * @param observable
     * @constructor
     */
    public handleFailedResponse(error, observable) {
        this.barService.complete();
        if (error.status && error.status == 304) {
            observable.next(error);
            return observable.complete();
        }
        if (error.status && error.status == 401) {
            if (this.authService.isUser()) {
                this.alertService.alertWarn('لطفا دوباره وارد شوید.');
                this.authService.deleteUser();
            }
            localStorage.removeItem('authToken');
            this.router.navigateByUrl('/login');
            this.blockUiService.unBlockPage();
            return observable.complete();
        }
        if (typeof error.status !== 'undefined' && error.status === 0) {
            this.alertService.alertWarn('دسترسی به اینترنت موجود نیست.');
        }
        return observable.error({
            code: error.status,
            body: error.error
        });
    }

}
