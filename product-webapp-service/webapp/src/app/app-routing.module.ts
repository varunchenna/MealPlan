import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GetResultComponent } from './get-result/get-result.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotificationComponent } from './component/notification/notification.component';
import { MyFoodComponent } from './component/my-food/my-food.component';
import { FavoriteRecipeComponent } from './component/favorite-recipe/favorite-recipe.component';
import { SearchRecipeComponent } from './component/search-recipe/search-recipe.component';
import { CategoryComponent } from './component/category/category.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './profile/logout/logout.component';
import { AccountSettingComponent } from './profile/account-setting/account-setting.component';
import { RecipeComponent } from './component/recipe/recipe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowmealplanComponent } from './components/showmealplan/showmealplan.component';
import { DieterFormComponent } from './dieter-form/dieter-form.component';
import { DemoFeedbackComponent } from './demo-feedback/demo-feedback.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'loginsuccess',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path: 'api/v1/dieters/:id', component: GetResultComponent},
  {path: 'dieter/:id', component: GetResultComponent},
  {path: "notify", component: NotificationComponent},
  { path: '', redirectTo: '/search', pathMatch: 'full' }, // Default route
  { path: 'search', component: SearchRecipeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'favorites', component: FavoriteRecipeComponent },
  { path: 'my-food', component: MyFoodComponent },
  { path: 'home', component: HomeComponent },
  { path: 'meal-plan', component: ShowmealplanComponent },
  { path: 'recipe', component: RecipeComponent },
  {path: 'generate-calories',component: DieterFormComponent},
  {path: 'feedback',component: DemoFeedbackComponent},
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'account-settings', component: AccountSettingComponent },
      { path: 'logout', component: LogoutComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }