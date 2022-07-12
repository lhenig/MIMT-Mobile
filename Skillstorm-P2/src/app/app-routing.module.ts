import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { DevicePageComponent } from './device-page/device-page.component';
import { PlanPageComponent } from './plan-page/plan-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {
    path: "user", component: UserPageComponent
  },
  {
    path: "plans", component: PlanPageComponent
  },
  {
    path: "devices", component: DevicePageComponent
  }
=======
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanPageComponent } from './plan-page/plan-page.component';

const routes: Routes = [
  {
    path:'',redirectTo:'landing', pathMatch: 'full' 
  },
  {
    path: 'landing', component: LandingPageComponent
  },
  {
    path: 'plans', component: PlanPageComponent
  },
  //This will handle 404 Errors
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
>>>>>>> d98b5e5a68c1aab5a13529749268c417e290d67a
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
