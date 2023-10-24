import { Component } from '@angular/core';
import { Dieter } from '../model/dieter';
import { DieterServiceService } from '../services/dieter-service.service';

@Component({
  selector: 'app-get-result',
  templateUrl: './get-result.component.html',
  styleUrls: ['./get-result.component.css']
})
export class GetResultComponent {
  dieter:Dieter= new Dieter()
  constructor(public dieterService: DieterServiceService){
    console.log(this.dieterService, "resultCom")
    // this.id = this.dieterService?.userData?.dieterId

    if(this.dieterService?.userData?.dieterId){this.id = this.dieterService.userData.dieterId;
      console.log(this.id);}
      
  }
  id:any
  ngOnInit():void{
    this.id=this.dieterService.userData.dieterId
    console.log(this.id, "resultCom")
    // this.dieter={
    //   dieterId:1,
    //   gender: "male",
    //   age: 30,
    //   weight: 65.0,
    //   height: 5.8,
    //   activityLevel: "Moderate active",
    //   weightGoal: "Lose",
    //   mainMeals_No: 2,
    //   snacks_No: 1,

    // }
  }
}
