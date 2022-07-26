import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  url: string = environment.apiUrl+"/devices"; //dunno yet
  constructor(private http: HttpClient) { }

  findAllDevices(): Observable<HttpResponse<Device[]>> {
    return this.http.get<Device[]>(this.url + "/authed", {observe: 'response', withCredentials: true});
  }

  //THIS NEEDS TWEAKING, NEED NEW ROUTES ON BACKEND
  findDevicesByPlan(planId: number): Observable<HttpResponse<Device[]>> {
    return this.http.get<Device[]>(this.url + `/${planId}`, {observe: 'response', withCredentials: true});
  }
  
  findDeviceById(deviceId: number): Observable<HttpResponse<Device>> {
    return this.http.get<Device>(this.url + `/${deviceId}`, {observe: 'response', withCredentials: true});
  }

  //might not need all CRUD for devices
  saveDevice(device: Device): Observable<HttpResponse<Device>> {
    return this.http.post<Device>(this.url + "/newdevice", device, {observe: 'response', withCredentials: true});
  }

  updateDevice(device: Device): Observable<HttpResponse<Device>> {
    return this.http.put<Device>(this.url, device, {observe: 'response', withCredentials: true});
  }

  deleteDevice(id: number): Observable<HttpResponse<Device>> {
    return this.http.delete<Device>(this.url, {observe: 'response', withCredentials: true});
  }

}
