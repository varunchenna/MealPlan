package in.stackroute.planning_meal.repository;

import in.stackroute.planning_meal.model.recipesToFrontEnd.MealPlanPerDay;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface MealPlanRepository extends MongoRepository<MealPlanPerDay, UUID> {
    @Query("{ ?0: ?1 }")
    List<MealPlanPerDay> findByExampleAndQueryFunction(String feildName, Object value);
}
