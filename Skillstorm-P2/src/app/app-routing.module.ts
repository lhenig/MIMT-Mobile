import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicePageComponent } from './device-page/device-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanPageComponent } from './plan-page/plan-page.component';
import { UserPageComponent } from './user-page/user-page.component';


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
  {
    path: 'device', component: DevicePageComponent
  },
  {
    path: 'user', component: UserPageComponent
  },
  //This will handle 404 Errors
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
