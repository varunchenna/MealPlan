package com.stackroute.FavoriteRecipe.repository;

import com.stackroute.FavoriteRecipe.model.FavoriteRecipe;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FavoriteRecipeRepository extends MongoRepository<FavoriteRecipe,String> {
}
