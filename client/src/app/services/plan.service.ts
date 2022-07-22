import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plan } from '../models/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  url: string = environment.apiUrl+"/plan"; //dunno yet
  constructor(private http: HttpClient) { }

  findAllPlans(): Observable<HttpResponse<Plan[]>> {
    return this.http.get<Plan[]>(this.url, {observe: 'response'});
  }

  //THIS NEEDS TWEAKING, NEEDS NEW ROUTES ON BACKEND
  findPlanByUser(userName: string): Observable<HttpResponse<Plan>> {
    return this.http.get<Plan>(this.url + `/byUser/${userName}`, {observe: 'response'});
  }

  findPlanById(planId: number): Observable<HttpResponse<Plan>> {
    return this.http.get<Plan>(this.url + `/${planId}`, {observe: 'response'});
  }
  
  //might not need all CRUD for plans
  savePlan(plan: Plan): Observable<HttpResponse<Plan>> {
    return this.http.post<Plan>(this.url, plan, {observe: 'response'});
  }

  updatePlan(plan: Plan): Observable<HttpResponse<Plan>> {
    return this.http.put<Plan>(this.url, plan, {observe: 'response'});
  }

  deletePlan(id: number): Observable<HttpResponse<Plan>> {
    return this.http.delete<Plan>(this.url, {observe: 'response'});
  }

}
