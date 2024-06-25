import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstant } from '../../app.constant';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    navbarUpadate: any;

    prefix: string = "AR-";
    userSessionAdded: any;

    constructor() { }

    public saveData(key: any, data: any) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    public getData(key: any) {
        return JSON.parse(localStorage.getItem(key)!);
    }
    public removeData(key: any) {
        localStorage.removeItem(key);
    }


    setItem(key: string, item: any, notify = false) {
        let storageType = localStorage.getItem(AppConstant.LOCALSTORAGE.SESSIONTYPE);

        let sessionHandler: Storage;

        if (storageType == "s") {
            sessionHandler = sessionStorage;
        } else {
            sessionHandler = localStorage;
        }

        const olddata = sessionHandler.getItem(this.prefix + key);
        if (olddata != null) {
            sessionHandler.removeItem(this.prefix + key);
        }
        sessionHandler.setItem(this.prefix + key, JSON.stringify(item));
        if (notify) {
            this.userSessionAdded.next(item);
        }
    }

    getItem(key: string) {
        let sType = localStorage.getItem(AppConstant.LOCALSTORAGE.SESSIONTYPE);

        let sessionHandler: Storage;

        if (sType == "s") {
            sessionHandler = sessionStorage;
        } else {
            sessionHandler = localStorage;
        }

        const item = sessionHandler.getItem(this.prefix + key) || "";

        try {
            return JSON.parse(item);
        } catch (error) {
            return item;
        }
    }

    removeItem(key: string) {
        let storageType = localStorage.getItem(AppConstant.LOCALSTORAGE.SESSIONTYPE);

        let sessionHandler: Storage;

        if (storageType == "s") {
            sessionHandler = sessionStorage;
        } else {
            sessionHandler = localStorage;
        }

        sessionHandler.removeItem(this.prefix + key);
    }

    clearAllItem() {
        let sType = localStorage.getItem(AppConstant.LOCALSTORAGE.SESSIONTYPE);

        let sessionHandler: Storage;

        if (sType == "s") {
            sessionHandler = sessionStorage;
        } else {
            sessionHandler = localStorage;
        }

        localStorage.clear();
        sessionStorage.clear();
        sessionHandler.clear();
    }

    getUserSessionData(): Observable<any> {
        return this.userSessionAdded.asObservable();
    }
}