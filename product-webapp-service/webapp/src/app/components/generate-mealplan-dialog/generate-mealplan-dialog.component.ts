import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MealplanService } from 'src/app/services/mealplan.service';
import { SimpleServiceService } from 'src/app/services/simple-service.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-generate-mealplan-dialog',
  templateUrl: './generate-mealplan-dialog.component.html',
  styleUrls: ['./generate-mealplan-dialog.component.css']
})
export class GenerateMealplanDialogComponent implements OnInit {
  totalCalories:number=0;
  user:User=new User()
  userId:number=100
  constructor(public dialogRef: MatDialogRef<GenerateMealplanDialogComponent>,private mealPlanService: MealplanService,private simpleService: SimpleServiceService) { 
    this.user=this.simpleService.user
    this.simpleService.getCurrentId(this.user.emailId).subscribe((response)=>{
      this.userId=response
    })
  }
  ngOnInit(): void {
  }

  

  genOneDayMealPlan() {
    this.mealPlanService.genOneDayMealPlan(this.totalCalories,this.userId).subscribe((response) => {
      this.dialogRef.close()
    })    
  }

}
