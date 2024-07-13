import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConstant } from "./app.constant";
import { HttphandlerService } from "./core/httphandler.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttphandlerService) { }

    signinUser(data: any): Observable<any> {
        return this.http.POST(
            AppConstant.API_END_POINT + AppConstant.API_CONFIG.API_URL.LOGIN.login,
            data
        );
    }
    
    saveSignUp(data: any): Observable<any> {
        return this.http.POST(
            AppConstant.API_END_POINT + AppConstant.API_CONFIG.API_URL.LOGIN.register,
            data
        );
    }

    postData(data: any): Observable<any> {
        return this.http.POST(
            AppConstant.API_END_POINT + AppConstant.API_CONFIG.API_URL.MASTERS.TEST.add,
            data
        );
    }
    
    getData(data: any): Observable<any> {
        return this.http.POST(
            AppConstant.API_END_POINT + AppConstant.API_CONFIG.API_URL.MASTERS.TEST.list,
            data
        );
    }
    
    geteditData(data: any): Observable<any> {
        return this.http.POST(
            AppConstant.API_END_POINT + AppConstant.API_CONFIG.API_URL.MASTERS.TEST.edit,
            data
        );
    }
    
    DeleteData(id: any): Observable<any> {
        return this.http.POST(
            AppConstant.API_END_POINT + AppConstant.API_CONFIG.API_URL.MASTERS.TEST.delete,
            id
        );
    }
}
