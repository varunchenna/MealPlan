package com.stackroute.FavoriteRecipe.service;

import com.stackroute.FavoriteRecipe.model.FavoriteRecipe;

import java.util.List;
import java.util.Map;

public interface FavoriteRecipeService {
    FavoriteRecipe addFavoriteRecipe(Map<String, Object> data);
    public List<FavoriteRecipe> getAllFavoriteRecipes();

    // FavoriteRecipeService.java
    void removeFavoriteRecipe(String id);

}
