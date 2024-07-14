import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../app.constant';
import { LocalStorageService } from './services/local-stroage.service';

@Injectable({
    providedIn: 'root'
})
export class HttphandlerService {

    constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

    GET(url: string): Observable<any> {
        let accesstoken = this.localStorageService.getItem(
            AppConstant.LOCALSTORAGE.TOKEN
        );
        let headers;
        if (accesstoken) {
            headers = {
                "authorization": accesstoken.token,
            };
        }
        return this.http.get(url, {
            headers: {
                ...headers,
            },
        });
    }

    POST(url: string, data: any, options?: any): Observable<any> {
        let accesstoken = this.localStorageService.getItem(
            'authorization'
        );
        let headers;
        if (accesstoken) {
            headers = {
                "Authorization": accesstoken,
            };
        }

        if (options) {
            return this.http.post(url, data, { headers: { ...options, ...headers } });
        } else {
            return this.http.post(url, data, { headers: { ...headers } });
        }
    }
    
    PUT(url: string, data: any, options?: any): Observable<any> {
        let accesstoken = this.localStorageService.getItem(
            AppConstant.LOCALSTORAGE.TOKEN
        );
        let headers;
        if (accesstoken) {
            headers = {
                "authorization": accesstoken.token,
            };
        }

        if (options) {
            return this.http.put(url, data, { headers: { ...options, ...headers } });
        } else {
            return this.http.put(url, data, { headers: { ...headers } });
        }
    }


    DELETE(url: string, options?: any): Observable<any> {
        let accesstoken = this.localStorageService.getItem(
            AppConstant.LOCALSTORAGE.TOKEN
        );
        let headers;
        if (accesstoken) {
            headers = {
                "authorization": accesstoken.token,
            };
        }

        if (options) {
            return this.http.delete(url, { headers: { ...options, ...headers } });
        } else {
            return this.http.delete(url, { headers: { ...headers } });
        }
    }
}
