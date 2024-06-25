import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConstant } from "../../app.constant";
import { HttphandlerService } from "../httphandler.service";

@Injectable()
export class LoginService {
    constructor(private http: HttphandlerService) { }

    signinUser(data: any): Observable<any> {
        return this.http.POST(
            AppConstant.API_END_POINT + AppConstant.API_CONFIG.API_URL.LOGIN,
            data
        );
    }
}
