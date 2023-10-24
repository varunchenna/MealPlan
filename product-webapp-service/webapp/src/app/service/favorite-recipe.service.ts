import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteRecipeService {
  postUrl: string;
  getUrl: string;
  deleteUrl: string;
  updateUrl: string;

  // Maintain a local list of favorite recipes
  private favoriteRecipes: any[] = [];

  constructor(private http: HttpClient) {
    this.getUrl = 'http://localhost:8000/api/favorite-recipe';
    this.postUrl = 'http://localhost:8000/api/favorite-recipe';
    this.deleteUrl = 'http://localhost:8000/api/favorite-recipe';
    this.updateUrl = 'http://localhost:8081/api/v1/product';

    // Initialize the list of favorite recipes by fetching it from the API
    this.getFavoriteRecipes().subscribe((recipes) => {
      this.favoriteRecipes = recipes;
    });
  }

  addFavoriteRecipe(recipe: any): Observable<any> {
    // Check if the recipe is already in the list of favorites
    if (!this.isRecipeInFavorites(recipe)) {
      // If not in favorites, add it to the local list and make the POST request
      this.favoriteRecipes.push(recipe);

      // Make the POST request to add the recipe as a favorite
      return this.http.post(this.postUrl, recipe);
    } else {
      // If already in favorites, return an Observable with a message indicating that it's already added
      return new Observable((observer) => {
        observer.next({ message: 'Recipe is already added to favorites.' });
        observer.complete();
      });
    }
  }

  getFavoriteRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.getUrl);
  }

  removeFromFavorites(recipeId: any): Observable<any> {
    // Implement the logic to remove a recipe from favorites by sending a DELETE request
    const deleteUrl = `${this.deleteUrl}/${recipeId}`;
    return this.http.delete(deleteUrl);
  }

  isRecipeInFavorites(recipe: any): boolean {
    // Check if the recipe is in the list of favorite recipes
    return this.favoriteRecipes.some((favRecipe) => favRecipe.id === recipe.id);
  }
}
