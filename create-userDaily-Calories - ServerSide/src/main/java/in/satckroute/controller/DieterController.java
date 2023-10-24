package in.satckroute.controller;

import in.satckroute.service.NutritionService;
import in.satckroute.model.Dieter;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/dieters")
@CrossOrigin(value="*")
public class DieterController {


    private final NutritionService nutritionService;

    // Create a new Dieter
    @PostMapping
    public ResponseEntity<Dieter> createDieter(@RequestBody Dieter dieter) {
        Dieter savedDieter = nutritionService.save(dieter);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedDieter);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Dieter>>getAllProduct(){
        return ResponseEntity.ok(nutritionService.getAllUsers());
    }

    // Get Dieter by ID
    @GetMapping("/{dieterId}")
    public ResponseEntity<Dieter> getDieterById(@PathVariable int dieterId) {
        Dieter dieter = nutritionService.findUserById(dieterId);
        return ResponseEntity.ok(dieter);
    }

    // Update Dieter by ID
    @PutMapping("/{dieterId}")
    public ResponseEntity<Dieter> updateDieter(@PathVariable int dieterId, @RequestBody Dieter updatedDieter) {
        Dieter updatedUser = nutritionService.updateUser(dieterId, updatedDieter);
        return ResponseEntity.ok(updatedUser);
    }

    // Delete Dieter by ID
    @DeleteMapping("/{dieterId}")
    public ResponseEntity<Void> deleteDieter(@PathVariable int dieterId) {
        nutritionService.deleteUserById(dieterId);
        return ResponseEntity.noContent().build();
    }

//    @PostMapping()

    // Calculate Daily Calories for Dieter by ID
    @GetMapping("/{dieterId}/daily-calories")
    public ResponseEntity<Double> calculateDailyCalorie(@PathVariable int dieterId) {
            Dieter dieter = nutritionService.findUserById(dieterId);
            double dailyCalories = nutritionService.calculateDailyCalories(dieterId, dieter);
            return ResponseEntity.ok(dailyCalories);
        }
//        dailyCalori = nutritionService.save(dieter);
//        double result= nutritionService.calculateDailyCalo(dieter);
//        System.out.println(dieter.getDailyCalories());
//        return ResponseEntity.ok(dieter.getDailyCalories());
}
