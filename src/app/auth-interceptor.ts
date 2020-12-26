import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from './Services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private authService: AuthService){}

    intercept(req:HttpRequest<any>, next:HttpHandler){
        // console.log("auth-interceptor");
        // console.log(this.authService.getIsAuth());
        if(this.authService.getIsAuth()){
            const authToken = this.authService.getToken();
            const authRequest = req.clone({
                headers: req.headers.set("Authorization", `Bearer ${authToken}`)
            });
    
            return next.handle(authRequest);
        }
       return next.handle(req);
    }
}
