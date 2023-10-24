import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'https://www.themealdb.com/api/json/v2/9973533';

  constructor(private http: HttpClient) {}
  
  // Get a list of categories
  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/categories.php`);
  }

  // Get a list of meals by category
  getMealsByCategory(category: string): Observable<any> {
    return this.http.get<any>(
      `https://www.themealdb.com/api/json/v2/9973533/search.php?s=fish`
    );
  }

  // Get meal details by ID
  getMealDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/lookup.php?i=${id}`);
  }


  // Search for meals based on a query
  searchMeals(query: string): Observable<any> {
    // Construct the URL for the API request
    const url = `${this.apiUrl}/search.php?s=${query}`;

    // Send an HTTP GET request to the API
    return this.http.get<any>(url);
  }
}
