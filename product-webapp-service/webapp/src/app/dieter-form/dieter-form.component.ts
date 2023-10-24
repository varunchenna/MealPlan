import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DieterServiceService } from '../services/dieter-service.service';
import { Dieter } from '../model/dieter';
import { Route, Router } from '@angular/router';
// import * as Pikaday from 'pikaday';
// import * as moment from 'moment';


@Component({
  selector: 'app-dieter-form',
  templateUrl: './dieter-form.component.html',
  styleUrls: ['./dieter-form.component.css']
})
export class DieterFormComponent {
  dieter: Dieter = new Dieter()
  showResult: boolean = false;


  constructor(private dieterService: DieterServiceService, private http: HttpClient, private router: Router) { }
  postUrl: string = 'http://localhost:8000/api/v1/dieters';

  ngOnInit(): void {
    dieterId:Number
   }
  
   getCalorieData(){

   }
  findCalories(userForm: NgForm){
    // const data=userForm.value;
    console.log(this.dieter);
    //   this.http.post(this.postUrl, this.user).subscribe((response) => {
    //     // console.log('Post Successfully');
    //   },
    //   (error: any) => {
    //     console.error('Error:', error);
    //   }
    // );
    
    this.dieterService.addDieterDetails(this.dieter).subscribe((dieter: Dieter) => {
      this.dieter=dieter;
      this.showResult=true;
      if(this.showResult) {
        this.dieterService.calculateCalorie(this.dieter.dieterId).subscribe((result:any)=>{
          console.log("hello Calorie", result);
          if(result){
            this.dieterService.getDieterDetails(this.dieter.dieterId).subscribe((result:any)=>{
            console.log(result);
            this.dieterService.userData=result;
            })
          }
        }
        );
        }
      // console.log('Generated dieterId:', this.dieter);
      // dieterId:this.dieter.dieterId;
    });
    console.log("hello");
   
    console.log(this.dieter.dieterId);
    // Route to the result details page with the generated dieterId
    // console.log('Generated dieterId:', this.dieter.dieterId);
    // console.log('Generated dieterId:', );
    this.router.navigate(['dieter', this.dieter.dieterId]);
    
  }
}




// var picker = new Pikaday({ 
//   field: document.getElementById('birth_date') ,
//   yearRange:[1900,2020],
//   onSelect: function(date) {
//   let age = calculateAge(date);
//   document.getElementById('age').innerHTML = "age: "+age ;
//   }                        
// });

// function calculateAge(date) 
// {
//   const now = new Date();
//   const diff = Math.abs(now - date );
//   const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
//   return age
// }
