import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DescriptionModalComponent } from '../description-modal/description-modal.component';
import { RecipeService } from 'src/app/service/recipe.service';

interface Category {
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
  showFullDescription: boolean;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
   // Initialize pagination properties
   items: any[] = []; // Your data array
   page: number = 1; // Current page
   pageSize: number = 8; // Number of items per page
  categories: Category[] = [];

  constructor(private recipeService: RecipeService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.recipeService.getCategories().subscribe((data) => {
      this.categories = data.categories.map((category :Category) => ({
        strCategory: category.strCategory,
        strCategoryThumb: category.strCategoryThumb,
        strCategoryDescription: category.strCategoryDescription,
        showFullDescription: false,
      }));
    });
  }

  openDescriptionModal(category: Category): void {
    this.dialog.open(DescriptionModalComponent, {
      data: category, // Pass the data to the modal component
    });
  }
}
