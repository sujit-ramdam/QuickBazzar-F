import {CanActivate, Router} from "@angular/router";
import { Injectable} from '@angular/core';
import {Observable} from "rxjs";
import { AuthService } from '../Services/auth.service';

@Injectable()
export class SellerGuard implements CanActivate{

   constructor(private authService: AuthService, private router:Router) {}

   canActivate():boolean | Observable<boolean> | Promise<boolean>{
       const isSeller = this.authService.getIsSeller();
       if(!isSeller){
          return this.router.navigate(["/"]);
       }
       return true;
   }
}