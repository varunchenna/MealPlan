package in.stackroute.planning_meal.model.generateMealPlan;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MealResponse {
    private List<Meal> meals;
    private Nutrients nutrients;

}
