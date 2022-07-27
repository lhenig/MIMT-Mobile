import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlanPageComponent } from './components/plan-page/plan-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { User } from './models/user.model';



const routes: Routes = [
  {
    path:'',redirectTo:'landing', pathMatch: 'full'
  },
  {
    path: 'landing', component: LandingPageComponent
  },
  {
    path: 'planCreation', component: PlanPageComponent
  },
  {
    path: 'user', component: UserPageComponent
  },
  {
    path: 'login', component: UserLoginComponent
  },
  {
    path: 'signup', component: UserSignupComponent
  },
  {
    path: 'editplan', component: EditPageComponent
  },
  //This will handle 404 Errors
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
