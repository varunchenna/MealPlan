import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MealPlanPerDay } from '../model/mealPlanPerDay';

@Injectable({
  providedIn: 'root'
})
export class MealplanService {


  url:string="http://localhost:8081/meal/";
  constructor(private http:HttpClient) { }
  genOneDayMealPlan(totalCalories:number,id:number){
    console.log("One day meal wor")
    return this.http.get<MealPlanPerDay>(this.url+"gen-meals-for-one-day"+"/Calories="+totalCalories.toString()+"/user-id="+id.toString())
  }
  getMealPlanOfPerson(userId:number){ 
    return this.http.get<MealPlanPerDay[]>(this.url+"get-meal-plan-of-person/userId="+userId.toString())
  }
  countPerDayPerUser(userId:number) {
    return this.http.get<number>(this.url+"count-per-day-per-user/userId="+userId.toString());
  }
  delFromLast(userId:number){
    return this.http.delete<void>(this.url+"delete-from-last/userId="+userId.toString())
  }
  genRandomOnExistingId(mealPlanPerDay:MealPlanPerDay){
    return this.http.put<any>(this.url+"gen-random-on-existing-id",mealPlanPerDay)
  }

  delFromFirst(userId:number) {
    return this.http.delete<void>(this.url+"del-from-first/userId="+userId.toString());
  }
}
