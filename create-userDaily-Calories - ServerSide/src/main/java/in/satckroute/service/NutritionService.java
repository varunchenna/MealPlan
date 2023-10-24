package in.satckroute.service;

import in.satckroute.model.Dieter;

import java.util.List;


public interface NutritionService {
    Dieter save(Dieter user);

    List<Dieter> getAllUsers();

    Dieter findUserById(int userId);

    Dieter updateUser(int id, Dieter user);

    void deleteUserById(int userId);

    float calculateDailyCalories(int userid, Dieter dieter);

//    double calculateProtein(Dieter user);
//
//    double calculateCarbohydrates(Dieter user);
//
//    double calculateFats(Dieter user);
}
