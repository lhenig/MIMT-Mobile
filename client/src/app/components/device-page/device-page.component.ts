import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';


@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  styleUrls: ['./device-page.component.css']
})
export class DevicePageComponent implements OnInit {
  DeviceList: Device[] = [];

  constructor(private deviceService: DeviceService, private router: Router) { }

  ngOnInit(): void {
    // this.deviceService.findAllDevices().subscribe((data) => {
    //   //console.log("body: " + data.body);
    //   if (data.body != null) {
    //     this.DeviceList = data.body;
    //   }
    // });
  }

}
