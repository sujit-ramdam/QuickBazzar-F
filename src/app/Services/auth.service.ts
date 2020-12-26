import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAccessTokens } from './../interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
  private signUpUrl= "http://localhost:8000/api/signup";
  private loginUrl= "http://localhost:8000/api/login";

  private token: any;
  private isAuthenticated:Boolean = false;
  private isSeller:Boolean = false;

  constructor(private http:HttpClient,
              private router:Router){}

  getToken(){
    return this.token;
  }

  getIsAuth(){
    return this.isAuthenticated;
  }

  getIsSeller(){
    return this.isSeller;
  }

  
  signUp(user){
     this.http.post<any>(this.signUpUrl, user)
           .subscribe(res =>{
            this.token = res.token;
            this.isAuthenticated = true;
            this.isSeller = res.user.isSeller;
    
            localStorage.setItem('token',this.token);
    
            if(!this.isSeller){
             return this.router.navigate(['/']);
            }
    
            return this.router.navigate(['/seller']);
           })
  }

  logIn(user){
    return this.http.post<any>(this.loginUrl, user)
     .subscribe(res=>{
        this.token = res.token;
        this.isAuthenticated = true;
        this.isSeller = res.user.isSeller;

        localStorage.setItem('token',this.token);

        if(!this.isSeller){
         return this.router.navigate(['/']);
        }

        return this.router.navigate(['/seller']);
     })
  }

  logOut(){

  }
}

