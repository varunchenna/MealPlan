package in.stackroute.planning_meal.model.recipesToFrontEnd;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MealPlanEach {
    private String name;
    private double calories;
    private int servings;
    private String image;
    private String sourceUrl;
}
