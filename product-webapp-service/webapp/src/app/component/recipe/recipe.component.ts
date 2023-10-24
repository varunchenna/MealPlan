import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from 'src/app/service/spoonacular.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: any[] = [];
  searchQuery: string = '';

  constructor(private spoonacularService: SpoonacularService) {}

  ngOnInit(): void {
    // Initial fetch (e.g., top 10 recipes)
    // this.fetchRecipes(10);
  }

  fetchRecipes(num: number): void {
    this.spoonacularService.getRecipesByCalories(num).subscribe((data: any) => {
      this.recipes = data.results;
    });
  }

  searchRecipes(): void {
    if (this.searchQuery.trim() !== '') {
      // Fetch recipes based on the search query
      this.spoonacularService.searchRecipes(this.searchQuery, 10).subscribe((data: any) => {
        this.recipes = data.results;
      });
    } else {
      // If the search query is empty, fetch top recipes (e.g., top 10)
      // this.fetchRecipes(10);
    }
  }



// communication between two component
 // Create a property to store favorite recipes
 favoriteRecipes: any[] = [];

 // Add a method to add a recipe to favorites
 addToFavorites(recipe: any) {
   this.favoriteRecipes.push(recipe);
 }


}
