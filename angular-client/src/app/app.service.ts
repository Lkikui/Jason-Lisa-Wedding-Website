// ./angular-client/src/app/guest.service.ts

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import  { Observable } from 'rxjs';

@Injectable()
export class GuestService {
    private apiUrl = 'http://localhost:3001/api';
    constructor(private http: Http){ }

    getGuests(): Promise<any>{
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError)
    }

    private handleData(res: any) {
        let body = res.json();
        console.log(body); // for development purposes only
        return body || {};
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for development purposes only
        return Promise.reject(error.message || error);
    }
}