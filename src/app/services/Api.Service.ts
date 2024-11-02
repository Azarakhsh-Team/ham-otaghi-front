import { Injectable, Injector } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

import { BaseService } from "./base.service";

const HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

/**
 * ApiService
 */
export class ApiService extends BaseService {


    constructor(injector: Injector) {
        super(injector);
    }

    public loginUser(requestModel) {
        const observable: ReplaySubject<any> = new ReplaySubject();
        this.httpPost(this.api.LOGIN, requestModel, {}).subscribe(
            result => this.handleSuccessResponse(result, observable),
            error => {
                this.handleFailedResponse(error, observable)
            },
        );
        return observable;
    }
}
