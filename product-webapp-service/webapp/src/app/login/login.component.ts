import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { SimpleServiceService } from '../services/simple-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg="";

  constructor(private service:RegistrationService , private router: Router,public simpleService:SimpleServiceService ) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data=> {
        console.log("response recieved")
        this.setUser()
        this.router.navigate(['/loginsuccess'])
      },
      error => {
        console.log("exception occured");
      this.msg="Bad credentials, please enter valid emailId and password";
      }
      )
  }
  gotoregistration(){
    this.router.navigate(['/registration']);
    
  }
  setUser(){
    this.simpleService.user=this.user;
    console.log("Login User   "+this.user.id)
    console.log("Email Id  "+ this.user.emailId)
  }

}
