import { Component, OnInit } from '@angular/core';
import { MealPlanEach } from 'src/app/model/mealPlanEach';
import { MealPlanPerDay } from 'src/app/model/mealPlanPerDay';
import { MealplanService } from 'src/app/services/mealplan.service';
import { DialogElementsExampleComponent } from '../dialog-elements-example/dialog-elements-example.component';
import { MatDialog } from '@angular/material/dialog';
import { MealplanDialogComponent } from '../mealplan-dialog/mealplan-dialog.component';
import { GenerateMealplanDialogComponent } from '../generate-mealplan-dialog/generate-mealplan-dialog.component';
import { SimpleServiceService } from 'src/app/services/simple-service.service';
import { User } from 'src/app/user';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-showmealplan',
  templateUrl: './showmealplan.component.html',
  styleUrls: ['./showmealplan.component.css'],

})
export class ShowmealplanComponent implements OnInit {
  userId: number = 100
  user: User = new User()
  mealPlanPerDayList: MealPlanPerDay[] = [];
  x: number = 0;
  rxTime = new Date();
  weekend = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
  day: any;
  meals: any;
  hour: any
  mealTime: string[] = ["Breakfast", "Lunch", "Dinner"]
  constructor(private mealPlanService: MealplanService, public dialog: MatDialog, public simpleService: SimpleServiceService, private notify: NotificationService) {
    this.user = this.simpleService.user
    this.simpleService.getCurrentId(this.user.emailId).subscribe((response) => {
      this.userId = response
      console.log("ShowmealPlanUserId" + this.userId)
      this.getTodayDate()
    })


  }

  getTodayDate() {
    this.mealPlanService.delFromFirst(this.userId).subscribe((response) => {
      this.getMealPlanOfPerson()
    })
  }
  openDialog() {
    this.dialog.open(DialogElementsExampleComponent);
  }
  genMealPlan() {
    const l = this.mealPlanPerDayList.length
    if (l < 3) {
      this.dialog.open(GenerateMealplanDialogComponent).afterClosed().subscribe(result => {
        this.getMealPlanOfPerson()
      })
    }
    else {
      this.dialog.open(DialogElementsExampleComponent)
    }

  }
  countPerDayPerUser() {
    this.mealPlanService.countPerDayPerUser(this.userId).subscribe((response) => {
      this.x = response
      console.log("this is count " + this.x + "!!!")
    })
  }
  getMealPlanOfPerson() {
    this.mealPlanService.getMealPlanOfPerson(this.userId).subscribe((response) => {
      this.mealPlanPerDayList = response;
      if (this.mealPlanPerDayList.length == 0) {
        this.simpleService.mealPlanToDay = []
      }
      else {
        var breakfast = this.mealPlanPerDayList[0].mealPlanEachList[0].name
        var lunch = this.mealPlanPerDayList[0].mealPlanEachList[1].name
        var dinner = this.mealPlanPerDayList[0].mealPlanEachList[2].name
        this.simpleService.mealPlanToDay = [breakfast, lunch, dinner]
        this.hour = this.rxTime.getHours();
        setTimeout(() => {
          this.shownoti(breakfast,lunch,dinner);
        }, 5000);
      }
      console.log("Length of mealPlanPerDayList " + this.simpleService.mealPlanToDay)
      this.countPerDayPerUser()
    })
    console.log(this.mealPlanPerDayList)
  }
  delFromLast() {
    console.log("workingg")
    this.mealPlanService.delFromLast(this.userId).subscribe((response) => {
      this.getMealPlanOfPerson()
      console.log(response)
      console.log("Working")
    })
  }
  round(TotalCalories: number) {
    return Math.round(TotalCalories * 100) / 100
  }


  // genRandomOnExistingId(mealPlanPerDay: MealPlanPerDay) {
  //   this.mealPlanService.genRandomOnExistingId(mealPlanPerDay).subscribe((response) => {
  //     this.getMealPlanOfPerson()
  //   })
  // }

  genRandomOnExistingId(mealPlanPerDay: MealPlanPerDay) {
    this.dialog.open(MealplanDialogComponent, {
      data: mealPlanPerDay
    }).afterClosed().subscribe(result => {
      this.getMealPlanOfPerson()
    });
  }


  ngOnInit(): void {
  }
  shownoti(breakfast:string,lunch:string,dinner:string) {
    this.notify.fetchMeal().subscribe((data) => {
      this.meals = data;
      this.day = this.weekend[this.rxTime.getDay()];
      console.log(this.meals);
      console.log(this.meals.title);
      console.log(this.day);
      var title = JSON.stringify(this.day)
      var mealb = JSON.stringify(this.meals.breakfast)
      var meall = JSON.stringify(this.meals.lunch)
      var meald = JSON.stringify(this.meals.dinner)

      if (this.hour > 7 && this.hour < 12) {
        this.notify.ShowHTMLsuccess("<h6>" + breakfast + "</h6>", title);
      }

      if (this.hour > 11 && this.hour < 15) {
        this.notify.ShowHTMLsuccess("<h6>" + lunch + "</h6>", title);
      }

      if (this.hour > 15 && this.hour < 23) {
        this.notify.ShowHTMLsuccess("<h6>" + dinner + "</h6>", title);
      }
      console.log(this.hour)
    })
  }


}
