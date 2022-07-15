import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicePageComponent } from './components/device-page/device-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlanPageComponent } from './components/plan-page/plan-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserPageComponent } from './components/user-page/user-page.component';



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
  {
    path: 'login', component: UserLoginComponent
  },
  //This will handle 404 Errors
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
