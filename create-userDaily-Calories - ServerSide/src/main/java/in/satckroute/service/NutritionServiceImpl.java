package in.satckroute.service;

import in.satckroute.model.Dieter;
import in.satckroute.repository.DieterNutritionRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class NutritionServiceImpl implements NutritionService {

    private final DieterNutritionRepository nutritionRepository;

    @Override
    public Dieter save(Dieter user){
        return nutritionRepository.save(user);
    }

    @Override
    public Dieter findUserById(int userId){
        Optional<Dieter> existUser = nutritionRepository.findById(userId);
        if(existUser.isPresent())
            return existUser.get();
        else {
            throw new EntityNotFoundException("User not found with ID: " + userId);
        }

    }

    @Override
    public List<Dieter> getAllUsers() {
        return nutritionRepository.findAll();
    }

    @Override
    public void deleteUserById(int id){
        nutritionRepository.deleteById(id);
    }

    @Override
    public Dieter updateUser(int userId, Dieter updatedUser) {
        // Find the existing user by ID
        Optional<Dieter> existingUserOptional = nutritionRepository.findById(userId);

        if (existingUserOptional.isPresent()) {
            Dieter existingUser = existingUserOptional.get();

            // Update the properties of the existing user with the new values
            existingUser.setGender(updatedUser.getGender());
            existingUser.setAge(updatedUser.getAge());
            existingUser.setWeight(updatedUser.getWeight());
            existingUser.setHeight(updatedUser.getHeight());
            existingUser.setActivityLevel(updatedUser.getActivityLevel());
            existingUser.setWeightGoal(updatedUser.getWeightGoal());
            existingUser.setMainMeals_No(updatedUser.getMainMeals_No());
            existingUser.setSnacks_No(updatedUser.getSnacks_No());

            // Save the updated user to the repository
            return nutritionRepository.save(existingUser);
        } else {
            throw new EntityNotFoundException("User not found with ID: " + userId);
        }
    }


    @Override
    public float calculateDailyCalories(int userId, Dieter user) {
//        Optional<Dieter> user;
//        user = nutritionRepository.findById(userId);

//        Dieter User = nutritionRepository.findById(userId);

//        if (user.isPresent()) {
            float TEE = calculateTEE(user);
            float dailyCalories = 522 + adjustForWeightGoals(TEE, user.getWeightGoal());
            user.setDailyCalories(dailyCalories);
            nutritionRepository.save(user);
            return dailyCalories;
//        else throw new IllegalArgumentException("Invalid id");
//        }
    }

    private float calculateTEE(Dieter user) {
        if ("male".equalsIgnoreCase(user.getGender())) {
            float pa = calculatePA(user.getActivityLevel());
            return (float) (864f + pa * ((14.2f * user.getWeight()) + (4.799f * user.getHeight())) - (9.72f * user.getAge()));
        } else {
            float pa = calculatePA(user.getActivityLevel());
            return (float) (800.731f + pa * ((10.4f * user.getWeight()) + (3.098f * user.getHeight())) - (7.31f * user.getAge()));
        }
//        else if ("female".equalsIgnoreCase(user.getGender())) {
//            return 447.593 + (9.247 * user.getWeight()) + (3.098 * user.getHeight()) - (4.330 * user.getAge());
//        }
//        else {
//            throw new IllegalArgumentException("Invalid gender");
//        }
    }
    private float calculatePA(String activityLevel) {
        switch (activityLevel.toLowerCase()) {
            case "sedentary":
                return (float) 1.2;
            case "lightly active":
                return 1.375F;
            case "moderate active":
                return (float) 1.55;
            case "very active":
                return (float) 1.725;
            case "super active":
                return (float) 1.9;
            default:
                throw new IllegalArgumentException("Invalid activity level");
        }
    }
    private float adjustForWeightGoals(float tdee, String weightGoal) {
        switch (weightGoal.toLowerCase()) {
            case "lose":
                return tdee - 500; // Create a calorie deficit for weight loss
            case "gain":
                return tdee + 500; // Create a calorie surplus for weight gain
            case "maintain":
                return tdee; // Maintain current weight
            default:
                throw new IllegalArgumentException("Invalid weight goal");
        }
    }
}