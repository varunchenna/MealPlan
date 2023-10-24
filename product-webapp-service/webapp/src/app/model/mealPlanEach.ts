export class MealPlanEach {
  name: string;
  calories: number;
  servings: number;
  image: string;
  sourceUrl:string;

  constructor(name: string="", calories: number=0, servings: number=0, image: string="",sourceUrl:string="") {
    this.name = name;
    this.calories = calories;
    this.servings = servings;
    this.image = image;
    this.sourceUrl=sourceUrl;
  }
}