import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private readonly apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  private readonly apiKey = 'e51dd3c637044edbb84db046869a6a6e'; // Replace with your Spoonacular API key

  constructor(private http: HttpClient) {}

  getRecipesByCalories(num: number): Observable<any> {
    // Set up query parameters
    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('sort', 'calories')
      .set('number', num.toString());

    // Make the GET request to the Spoonacular API
    return this.http.get(this.apiUrl, { params });
  }
  // ... (previously defined methods)

  searchRecipes(query: string, num: number): Observable<any> {
    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('query', query)
      .set('number', num.toString());

    return this.http.get(this.apiUrl, { params });
  }
}


