import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  meals: any

  constructor(private toastr: ToastrService, private http: HttpClient) { }
  url = "http://localhost:8452/api/v1/notify";

  fetchMeals(){
    this.http.get(this.url+"/all");
  }
  
  fetchMeal(){
    return this.http.get(this.url+"/1");
  }

  ShowHTMLsuccess(title: string, body:string){
        this.toastr.success(title,body,{
          enableHtml: true,
          closeButton: true,
          tapToDismiss: false,
          progressBar: true,
        })
  }
}
