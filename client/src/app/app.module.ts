import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { PlanPageComponent } from './components/plan-page/plan-page.component';
import { DevicePageComponent } from './components/device-page/device-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UsersPlansComponent } from './components/users-plans/users-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    PlanPageComponent,
    DevicePageComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    UserInfoComponent,
    UsersPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
