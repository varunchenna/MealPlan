import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit() {
  }
  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this.router.navigate(['/login']);
      },
      error =>{
        console.log("exception occured");
        this.msg ="User already exists";
        //this.msg=error.error;
      }
    )
  }
}
