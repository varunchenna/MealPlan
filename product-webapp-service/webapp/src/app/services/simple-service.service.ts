import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {
  public user:User
  public mealPlanToDay:string[]
  url:string="http://localhost:8090/";
  constructor(private http:HttpClient) { }

  getCurrentId(emailId:string){
    console.log("From ge id meal todays  "+this.mealPlanToDay)
    console.log("getCurrentId angular service")
    console.log(this.user.emailId)
    return this.http.get<any>(this.url+"get-current-id/"+emailId)
  }
}
