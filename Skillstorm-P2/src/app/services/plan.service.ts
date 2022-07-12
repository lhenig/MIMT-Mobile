import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../models/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  url: string = ""; //dunno yet
  constructor(private http: HttpClient) { }

  findAllPlans(): Observable<HttpResponse<Plan[]>> {
    return this.http.get<Plan[]>(this.url, {observe: 'response'});
  }

  findOnePlan(id: number): Observable<HttpResponse<Plan>> {
    return this.http.get<Plan>(this.url, {observe: 'response'});
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
