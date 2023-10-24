package in.stackroute.planning_meal.model.recipeDetails;

import in.stackroute.planning_meal.model.recipeDetails.Nutrition;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Recipe {
    private int id;
    private String title;
    private String image;
    private String imageType;
    private Nutrition nutrition;
}
