package in.stackroute.planning_meal.model.generateMealPlan;

/*
        "calories": 1999.97,
        "protein": 307.99,
        "fat": 61.67,
        "carbohydrates": 36.33
 */

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Nutrients {
    private float calories;
    private float protein;
    private float fat;
    private float carbohydrates;


}
