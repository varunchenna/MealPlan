import { OnInit } from '@angular/core';
import { RecipeService } from 'src/app/service/recipe.service';
import { Component } from '@angular/core';
import { FavoriteRecipeService } from 'src/app/service/favorite-recipe.service';


// import { FavoriteRecipeComponent } from '../favorite-recipe/favorite-recipe.component';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  // Initialize pagination properties
  items: any[] = []; // Your data array
  page: number = 1; // Current page
  pageSize: number = 8; // Number of items per page
  recipes: any[] = [];
  searchQuery: string = '';

  showApiConnectionError: boolean = false;

  constructor(private recipeService: RecipeService, private favoriteRecipeService: FavoriteRecipeService) { }

  ngOnInit() {
    this.fetchRecipe();
  }

  fetchRecipe() {
    // Call the getMealsByCategory method to fetch meals in the "Seafood" category
    this.recipeService.searchMeals('fish').subscribe((data: any) => {
      // Handle the response data here
      if (data && data.meals) {
        this.recipes = data.meals;
      } else {
        this.recipes = [];
      }
    }, error => {
      // Handle API connection error here
      this.showApiConnectionError = true; // You can set a flag to control the message visibility
    });
  }

  getMeal() {
    if (this.searchQuery.trim() === '') {
      this.fetchRecipe();
    } else {
      this.recipeService.searchMeals(this.searchQuery).subscribe((data: any) => {
        if (data && data.meals) {
          this.recipes = data.meals;
        } else {
          this.recipes = [];
        }
      }, error => {
        // Handle API connection error here
        this.showApiConnectionError = true; // You can set a flag to control the message visibility
      });
    }
  }




  //for favorite recipe

  //favRecipe: any = this.favoriteRecipeService.favoriteRecipes;

  addToFavorites(recipe: any) {
    // Check if the recipe is already in favorites
    if (!this.favoriteRecipeService.isRecipeInFavorites(recipe)) {
      // If not in favorites, add it to favorites
      this.favoriteRecipeService.addFavoriteRecipe(recipe).subscribe(
        (data) => {
          console.log(data);
          // Optionally, you can update the recipe object to indicate it's in favorites
          recipe.isFavorite = true;
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      // Handle the case where the recipe is already in favorites
      console.log('Recipe is already in favorites.');
    }
  }
  


}
