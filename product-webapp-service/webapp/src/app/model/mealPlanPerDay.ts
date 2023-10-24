import {  MealPlanEach } from "./mealPlanEach";


export class MealPlanPerDay {
    id:any;
    date:string;
    userId:number;
    mealPlanEachList:MealPlanEach[];
    totalCalories:number;
    constructor(
      id:any="",
      date:string="",
      userId:number=0,
      mealPlanEachList:MealPlanEach[]=[],
      totalCalories:number=0
    ) {
      this.id=id;
      this.date=date;
      this.userId=userId;
      this.mealPlanEachList=mealPlanEachList;
      this.totalCalories=totalCalories;
    }
  }
  