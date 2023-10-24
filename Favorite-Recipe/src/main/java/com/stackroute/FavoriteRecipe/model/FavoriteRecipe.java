package com.stackroute.FavoriteRecipe.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "favorite_recipe")
public class FavoriteRecipe {
    @MongoId
    private String id;

    private Map<String, Object> data;

    // Constructor with data
    public FavoriteRecipe(Map<String, Object> data) {
        this.data = data;
    }

}
