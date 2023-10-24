export class Dieter {
    dieterId: number | null = null;
    gender: string = '';
    age: number | null = null;
    weight: number | null = null;
    height: number | null = null;
    activityLevel: string = '';
    weightGoal: string = '';
    mainMeals_No: number | null = null;
    snacks_No: number | null = null;
    dailyCalories: number | null = null;

    constructor(
        dieterId: number | null = null,
        gender: string = '',
        age: number | null = null,
        height: number | null = null,
        weight: number | null = null,
        activityLevel: string = '',
        weightGoal: string = '',
        mainMeals_No: number | null = null,
        snacks_No: number | null = null,
        dailyCalories: number | null=null
    ) {
        // this.dieterId = dieterId;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.activityLevel = activityLevel;
        this.weightGoal = weightGoal;
        this.mainMeals_No = mainMeals_No;
        this.snacks_No = snacks_No;
        this.dailyCalories= dailyCalories;
    }
}
