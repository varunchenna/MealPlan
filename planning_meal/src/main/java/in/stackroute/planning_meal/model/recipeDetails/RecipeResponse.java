package in.stackroute.planning_meal.model.recipeDetails;

import in.stackroute.planning_meal.model.recipeDetails.Recipe;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RecipeResponse {
    private List<Recipe> results;
    private int offset;
    private int number;
    private int totalResults;
}