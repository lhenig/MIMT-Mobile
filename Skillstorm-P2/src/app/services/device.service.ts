import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  url: string = ""; //dunno yet
  constructor(private http: HttpClient) { }

  findAllDevices(): Observable<HttpResponse<Device[]>> {
    return this.http.get<Device[]>(this.url, {observe: 'response'});
  }

  findOneDevice(id: number): Observable<HttpResponse<Device>> {
    return this.http.get<Device>(this.url, {observe: 'response'});
  }
  
  //might not need all CRUD for devices
  saveDevice(device: Device): Observable<HttpResponse<Device>> {
    return this.http.post<Device>(this.url, device, {observe: 'response'});
  }

  updateDevice(device: Device): Observable<HttpResponse<Device>> {
    return this.http.put<Device>(this.url, device, {observe: 'response'});
  }

  deleteDevice(id: number): Observable<HttpResponse<Device>> {
    return this.http.delete<Device>(this.url, {observe: 'response'});
  }

}
