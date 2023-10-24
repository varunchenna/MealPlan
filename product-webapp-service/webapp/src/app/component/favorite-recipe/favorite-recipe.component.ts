import { Component, OnInit } from '@angular/core';
import { FavoriteRecipeService } from 'src/app/service/favorite-recipe.service';

@Component({
  selector: 'app-favorite-recipe',
  templateUrl: './favorite-recipe.component.html',
  styleUrls: ['./favorite-recipe.component.css'],
})
export class FavoriteRecipeComponent implements OnInit {
  favoriteRecipes: any[] = []; // Property to hold favorite recipes

  constructor(private favoriteRecipeService: FavoriteRecipeService) { }

  ngOnInit(): void {
    // Call the service method to get favorite recipes
    this.getFavRecipe();

  }

  getFavRecipe() {
    this.favoriteRecipeService.getFavoriteRecipes().subscribe((data) => {
      this.favoriteRecipes = data;
      console.log(data);
    }, (err) => {
      console.log(err)
    });
  }

  removeFromFavorites(recipeId: string) {
    this.favoriteRecipeService.removeFromFavorites(recipeId).subscribe(data => {
      this.getFavRecipe();
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}
