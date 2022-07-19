import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { PlanPageComponent } from './components/plan-page/plan-page.component';
import { DevicePageComponent } from './components/device-page/device-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UsersPlansComponent } from './components/users-plans/users-plans.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from './services/app.service';

//need to override intercept
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

//might need routes changed
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing'},
  { path: 'landing', component: LandingPageComponent},
  { path: 'login', component: UserLoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    PlanPageComponent,
    DevicePageComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    UserInfoComponent,
    UsersPlansComponent,
    UserLoginComponent,
    UserSignupComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
