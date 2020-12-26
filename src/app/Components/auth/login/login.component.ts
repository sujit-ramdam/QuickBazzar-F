import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }

  logIn(logInDetails){
    this.authService.logIn(logInDetails);
  }

}
