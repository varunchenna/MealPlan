package in.satckroute.model;

import in.satckroute.model.MacroNutrient;
import jakarta.persistence.*;
import lombok.*;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Dieter {

    @Id
    @GeneratedValue
    private int dieterId;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false)
    private int age;

    @Column(nullable = false)
    private double weight;

    @Column(nullable = false)
    private double height;

    @Column(nullable = false)
    private String activityLevel;

    @Column(nullable = false)
    private String weightGoal;

    @Column(nullable = false)
    private int mainMeals_No;

    @Column(nullable = false)
    private int snacks_No;

    @Column(nullable = false)
    private float dailyCalories;


//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "macro_nutrient_id")
//    private MacroNutrient macroNutrient;
}
