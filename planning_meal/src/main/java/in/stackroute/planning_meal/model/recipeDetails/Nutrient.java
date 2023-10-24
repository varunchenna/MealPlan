package in.stackroute.planning_meal.model.recipeDetails;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Nutrient {
    private String name;
    private double amount;
    private String unit;
}