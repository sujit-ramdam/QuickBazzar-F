import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../Services/auth.service';


@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp(signUpDetails){
    console.log(signUpDetails);
    this.authService.signUp(signUpDetails);
  }
}
