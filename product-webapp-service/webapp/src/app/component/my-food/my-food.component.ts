import { Component } from '@angular/core';

@Component({
  selector: 'app-my-food',
  templateUrl: './my-food.component.html',
  styleUrls: ['./my-food.component.css']
})
export class MyFoodComponent {
  searchQuery: string = '';
  searchRecipes(): void {
   
  }

}
