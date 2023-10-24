import { NgModule , CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowmealplanComponent } from './components/showmealplan/showmealplan.component';
import { RangePipe } from './rangePipe';
import { DialogElementsExampleComponent } from './components/dialog-elements-example/dialog-elements-example.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GenerateMealplanDialogComponent } from './components/generate-mealplan-dialog/generate-mealplan-dialog.component';
import { MealplanDialogComponent } from './components/mealplan-dialog/mealplan-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DieterFormComponent } from './dieter-form/dieter-form.component';
import { GetResultComponent } from './get-result/get-result.component';
// import { DatePickerComponent } from './date-picker/date-picker.component';
import { ToastrModule } from 'ngx-toastr';


import { NotificationComponent } from './component/notification/notification.component';
import { NotificationService } from './services/notification.service';
import { RouterModule , Routes} from '@angular/router';

import { CategoryComponent } from './component/category/category.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { NgxPaginationModule } from 'ngx-pagination';


import { DescriptionModalComponent } from './component/description-modal/description-modal.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { SidebarComponent } from './component/shared/sidebar/sidebar.component';
import { RecipeComponent } from './component/recipe/recipe.component';
import { SearchRecipeComponent } from './component/search-recipe/search-recipe.component';
import { FavoriteRecipeComponent } from './component/favorite-recipe/favorite-recipe.component';
import { MyFoodComponent } from './component/my-food/my-food.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './profile/logout/logout.component';
import { AccountSettingComponent } from './profile/account-setting/account-setting.component';
import { DemoFeedbackComponent } from './demo-feedback/demo-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    RangePipe,
    AppComponent,
    ShowmealplanComponent,
    DialogElementsExampleComponent,
    GenerateMealplanDialogComponent,
    MealplanDialogComponent,
    DieterFormComponent,
    GetResultComponent,
    NotificationComponent,
    CategoryComponent,
    DescriptionModalComponent,
    HeaderComponent,
    SidebarComponent,
    SearchRecipeComponent,
    FavoriteRecipeComponent,
    MyFoodComponent,
    RecipeComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    LogoutComponent,
    AccountSettingComponent,
    DemoFeedbackComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    MatToolbarModule, // Add MatToolbarModule here
    MatSidenavModule, // Import MatSidenavModule
    MatInputModule,
    NgxPaginationModule,
    MatListModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
