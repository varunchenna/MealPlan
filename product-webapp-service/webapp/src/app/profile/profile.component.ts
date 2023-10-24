import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  onFileSelected(event : any){

  }


  constructor(private router: Router) {}

logout() {
  // Implement your logout logic here, e.g., clear user sessions or tokens
  // After logout, navigate to the login page or another appropriate route
  this.router.navigate(['/login']);
}

}
