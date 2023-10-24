package in.stackroute.planning_meal.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import in.stackroute.planning_meal.model.generateMealPlan.Meal;
import in.stackroute.planning_meal.model.generateMealPlan.MealResponse;
import in.stackroute.planning_meal.model.recipesToFrontEnd.MealPlanEach;
import in.stackroute.planning_meal.model.recipesToFrontEnd.MealPlanPerDay;
import in.stackroute.planning_meal.repository.MealPlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class MealService {
    @Autowired
    private final MealPlanRepository mealPlanRepository;
    @Autowired
    private final MongoTemplate mongoTemplate;
    @Autowired
    private RestTemplate restTemplate;
    public Object genOneDayMealPlan(int totalCalories,int id) {
        return genAndStoreMeal(totalCalories,id);

// Create an ObjectMapper instance
    }


    public Object genAndStoreMeal(int totalCalories,int id){
        String url1="https://api.spoonacular.com/mealplanner/generate?apiKey=c630e262bbaf4b6eaad75bb7747ce9f4" +
                "&timeFrame=day&targetCalories="+Integer.toString(totalCalories);
        HttpHeaders headers=new HttpHeaders();
        String json= restTemplate.exchange(url1, HttpMethod.GET, new HttpEntity<>(headers), String.class).getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            // Deserialize the JSON data into a MealResponse object
            MealResponse mealResponse = objectMapper.readValue(json, MealResponse.class);

            // Access the meals and nutrients from the MealResponse object
            List<Meal> meals = mealResponse.getMeals();
            MealPlanPerDay mealPlanPerDay=new MealPlanPerDay();
            mealPlanPerDay.setDate(getDate(id));
            mealPlanPerDay.setMealId(UUID.randomUUID());
            mealPlanPerDay.setUserId(id);
            // Now you can work with the meals and nutrients objects
            List<MealPlanEach> listMeals=new ArrayList<>();
            for (int i=0;i<3;i++) {
                Meal meal=meals.get(i);
                MealPlanEach mealPlanEach=new MealPlanEach();
                mealPlanEach.setSourceUrl(meal.getSourceUrl());
                mealPlanEach.setName(meal.getTitle());
                mealPlanEach.setServings(meal.getServings());
                mealPlanEach.setCalories(i);
                String image_url="https://spoonacular.com/recipeImages/"+Integer.toString(meal.getId())+"-312x231.jpg";
                mealPlanEach.setImage(image_url);
                listMeals.add(mealPlanEach);
            }
            mealPlanPerDay.setMealPlanEachList(listMeals);
            double totalCaloriesGot=mealResponse.getNutrients().getCalories();
            mealPlanPerDay.setTotalCalories((double) Math.round(totalCaloriesGot * 100) /100);
            mealPlanRepository.save(mealPlanPerDay);
            return mealPlanPerDay;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return json;
    }
    public int countPerDayPerUser(int userId){
        List<MealPlanPerDay> mealPlanPerDayList=findByExampleAndQueryFunction("userId",userId);
        return mealPlanPerDayList.size();
    }
    public List<MealPlanPerDay> findByExampleAndQueryFunction(String fieldName, Object value) {
        return mealPlanRepository.findByExampleAndQueryFunction(fieldName, value);
    }

    public Object getMealPlanOfPerson(int userId) {

        return findByExampleAndQueryFunction("userId",userId);

    }
    public void deleteFromLast(int userId){
        List<MealPlanPerDay> mealPlanPerDayList=findByExampleAndQueryFunction("userId",userId);
        int l=mealPlanPerDayList.size();
        if(l>0){
            UUID id=mealPlanPerDayList.get(l-1).getMealId();
            mealPlanRepository.deleteById(id);
        }
    }
    public void genRandomOnExistingId( MealPlanPerDay mealPlanPerDay)  {
        String url1 = "https://api.spoonacular.com/mealplanner/generate?apiKey=c630e262bbaf4b6eaad75bb7747ce9f4" +
                "&timeFrame=day&targetCalories="+mealPlanPerDay.getTotalCalories();
        HttpHeaders headers = new HttpHeaders();
        String json = restTemplate.exchange(url1, HttpMethod.GET, new HttpEntity<>(headers), String.class).getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        MealResponse mealResponse = null;
        try {
            mealResponse = objectMapper.readValue(json, MealResponse.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        // Access the meals and nutrients from the MealResponse object
        List<Meal> meals = mealResponse.getMeals();
        List<MealPlanEach> listMeals = new ArrayList<>();
        for (int i=0;i<3;i++) {
            Meal meal=meals.get(i);
            System.out.println(meal.getTitle());
            System.out.println(meal.getServings());
            MealPlanEach mealPlanEach = new MealPlanEach();
            mealPlanEach.setSourceUrl(meal.getSourceUrl());
            mealPlanEach.setName(meal.getTitle());
            mealPlanEach.setServings(meal.getServings());
            mealPlanEach.setCalories(i);
            String image_url =
                    "https://spoonacular.com/recipeImages/" + Integer.toString(meal.getId()) + "-312x231.jpg";
            mealPlanEach.setImage(image_url);
            listMeals.add(mealPlanEach);
        }
        mealPlanPerDay.setMealPlanEachList(listMeals);
        double totalCaloriesGot=mealResponse.getNutrients().getCalories();
        mealPlanPerDay.setTotalCalories((double) Math.round(totalCaloriesGot * 100) /100);
        mealPlanRepository.save(mealPlanPerDay);
    }
    public String getDate(int userId){
        int count=countPerDayPerUser(userId);
        System.out.println("Spring Boot getDate"+count);
        return (LocalDate.now().plusDays(count)).format(DateTimeFormatter.ISO_DATE);
    }


    public void deleteFromFirst(int userId) {
        String date=LocalDate.now().format(DateTimeFormatter.ISO_DATE);
        List<MealPlanPerDay> mealPlanPerDayList=findByExampleAndQueryFunction("userId",userId);
        int l=mealPlanPerDayList.size();
        while(l>0 && !Objects.equals(mealPlanPerDayList.get(0).getDate(), date)){
            UUID id = mealPlanPerDayList.get(0).getMealId();
            mealPlanRepository.deleteById(id);
            l=l-1;
        }
    }
}

//         String url="https://api.spoonacular.com/mealplanner/generate?apiKey=c630e262bbaf4b6eaad75bb7747ce9f4" +
//                "&timeFrame=day&targetCalories=2000";
