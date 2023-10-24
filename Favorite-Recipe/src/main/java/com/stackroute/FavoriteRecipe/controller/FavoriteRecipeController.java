package com.stackroute.FavoriteRecipe.controller;

import com.stackroute.FavoriteRecipe.model.FavoriteRecipe;
import com.stackroute.FavoriteRecipe.service.FavoriteRecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/favorite-recipe")
@CrossOrigin(origins = "http://localhost:4200")
public class FavoriteRecipeController {

    @Autowired
    private FavoriteRecipeService service;
    @PostMapping
    public ResponseEntity<Map<String, String>> saveData(@RequestBody Map<String, Object> data) {
        try {
            FavoriteRecipe savedData = service.addFavoriteRecipe(data);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Data saved successfully with ID: " + savedData.getId());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Error saving data");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }


    @GetMapping
    public ResponseEntity<List<FavoriteRecipe>> getAllFavoriteRecipes() {
        List<FavoriteRecipe> favoriteRecipes = service.getAllFavoriteRecipes();
        return ResponseEntity.ok(favoriteRecipes);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> removeFavoriteRecipe(@PathVariable String id) {
        try {
            // Implement the logic to remove the recipe with the specified ID from the database
            service.removeFavoriteRecipe(id);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Recipe removed successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Error removing recipe");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }




}


