import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { MealPlanPerDay } from 'src/app/model/mealPlanPerDay';
import { MealplanService } from 'src/app/services/mealplan.service';
import { ShowmealplanComponent } from '../showmealplan/showmealplan.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mealplan-dialog',
  templateUrl: './mealplan-dialog.component.html',
  styleUrls: ['./mealplan-dialog.component.css']
})
export class MealplanDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<MealplanDialogComponent>,@Inject(MAT_DIALOG_DATA) public childMealPlanPerDay:MealPlanPerDay,private mealPlanService: MealplanService) { }
  ngOnInit(): void {
  }
  totalCalories:number=this.childMealPlanPerDay.totalCalories;
  genRandomOnExistingId() {
    this.childMealPlanPerDay.totalCalories=this.totalCalories
    this.mealPlanService.genRandomOnExistingId(this.childMealPlanPerDay).subscribe((response) => {
      this.dialogRef.close()
    })
    
  }

}



