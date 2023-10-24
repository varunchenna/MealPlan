import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  onFileSelected(event :any){

  }

  constructor(private router: Router) {}

  logout() {
    // Implement your logout logic here, e.g., clearing user session or tokens
    // After logout, navigate the user to the login page or another appropriate route
    this.router.navigate(['/login']); // Change '/login' to your logout route
  }

}
