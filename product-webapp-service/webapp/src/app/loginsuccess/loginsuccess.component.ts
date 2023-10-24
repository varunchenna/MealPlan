import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  constructor(private notify: NotificationService) {
    // setTimeout(() => {
    //   this.notify.ShowHTMLsuccess("<h6>" + "</h6>", "Welcome to MealPlan");
    // }, 5000);

  }

  ngOnInit(): void {
  }

}
