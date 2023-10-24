package in.stackroute.planning_meal.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import in.stackroute.planning_meal.model.recipesToFrontEnd.MealPlanPerDay;
import in.stackroute.planning_meal.service.MealService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/meal")

public class MealController {

    private final MealService mealService;
    @Autowired
    public MealController(MealService mealService){
        this.mealService=mealService;
    }
    @GetMapping("/gen-meals-for-one-day/Calories={totalCalories}/user-id={id}")
    public ResponseEntity<?> genOneDayMealPlan(@PathVariable int totalCalories,@PathVariable int id){

        return ResponseEntity.ok(mealService.genOneDayMealPlan(totalCalories,id));
    }
    @GetMapping("/get-meal-plan-of-person/userId={userId}")
    public  ResponseEntity<?> getMealPlanOfPerson(@PathVariable int userId){
        return ResponseEntity.ok(mealService.getMealPlanOfPerson(userId));
    }

    @GetMapping("/count-per-day-per-user/userId={userId}")
    public  ResponseEntity<?> countPerDayPerUser(@PathVariable int userId){
        return ResponseEntity.ok(mealService.countPerDayPerUser(userId));
    }
    @DeleteMapping("/delete-from-last/userId={userId}")
    public void deleteFromLast(@PathVariable int userId){
        mealService.deleteFromLast(userId);
    }
    @PutMapping("/gen-random-on-existing-id")
    public void genRandomOnExistingId(@RequestBody MealPlanPerDay mealPlanPerDay)  {
        mealService.genRandomOnExistingId(mealPlanPerDay);
    }
    @DeleteMapping("/del-from-first/userId={userId}")
    public void deleteFromFirst(@PathVariable int userId){
        mealService.deleteFromFirst(userId);
    }
}
