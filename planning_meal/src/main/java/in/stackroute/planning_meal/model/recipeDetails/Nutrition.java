package in.stackroute.planning_meal.model.recipeDetails;

import in.stackroute.planning_meal.model.recipeDetails.Nutrient;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Nutrition {
    private List<Nutrient> nutrients;
}

