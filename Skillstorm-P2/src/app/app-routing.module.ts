import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
