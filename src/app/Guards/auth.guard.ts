import {CanActivate, Router} from "@angular/router";
import { Injectable} from '@angular/core';
import {Observable} from "rxjs";
import { AuthService } from '../Services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

   constructor(private authService: AuthService, private router:Router) {}

   canActivate():boolean | Observable<boolean> | Promise<boolean>{
       const isAuth = this.authService.getIsAuth();
       if(!isAuth){
         return this.router.navigate(["/signup"]);
       }
       return true;
   }
}