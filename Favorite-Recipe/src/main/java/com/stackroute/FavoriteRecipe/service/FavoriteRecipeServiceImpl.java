package com.stackroute.FavoriteRecipe.service;

import com.stackroute.FavoriteRecipe.model.FavoriteRecipe;
import com.stackroute.FavoriteRecipe.repository.FavoriteRecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class FavoriteRecipeServiceImpl implements FavoriteRecipeService {

    @Autowired
    private FavoriteRecipeRepository repository;

    @Override
    public FavoriteRecipe addFavoriteRecipe(Map<String, Object> data){
        FavoriteRecipe favoriteRecipe = new FavoriteRecipe(data);
        return repository.save(favoriteRecipe);
    }

    @Override
    public List<FavoriteRecipe> getAllFavoriteRecipes() {
        return repository.findAll();
    }


    // FavoriteRecipeServiceImpl.java
    @Override
    public void removeFavoriteRecipe(String id) {
        // Implement the logic to remove the recipe from the database using your repository
        repository.deleteById(id);
    }


}
