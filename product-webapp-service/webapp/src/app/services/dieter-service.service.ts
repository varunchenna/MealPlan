import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Dieter } from '../model/dieter';

@Injectable({
  providedIn: 'root'
})
export class DieterServiceService {
  postUrl: string = 'http://localhost:8000/api/v1/dieters';
  getUrlId: string = 'http://localhost:8000/api/v1/dieters/452';
  userData:any
  constructor(private http:HttpClient) { }
  addDieterDetails(dieter?: Dieter): Observable<Dieter> {
    return this.http.post<Dieter>(`${this.postUrl}`, dieter);
  }

  getDieterDetails(dieterId:any):Observable<Dieter>{
    const url=`http://localhost:8000/api/v1/dieters/${dieterId}`

    return this.http.get<Dieter>(url);
  }

  calculateCalorie(dieterId:any):Observable<Dieter>{
    const url=`http://localhost:8000/api/v1/dieters/${dieterId}/daily-calories`
    return this.http.get<Dieter>(url);
  }
   }
