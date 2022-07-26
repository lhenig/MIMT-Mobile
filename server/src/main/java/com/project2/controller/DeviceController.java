package com.project2.controller;

import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.project2.beans.Device;
import com.project2.beans.Device;
import com.project2.services.DeviceService;
import com.project2.services.UserServiceV1;

@EnableGlobalMethodSecurity(jsr250Enabled = false, prePostEnabled = true, securedEnabled = false)
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/devices")
public class DeviceController {

  @Autowired
  DeviceService deviceService;
  
  // Just for testing
  @GetMapping("/authed")
  public ResponseEntity<List<Device>> getUsers(HttpServletResponse response) {
    List<Device> deviceData = deviceService.findAllDevices();
    if (!deviceData.isEmpty()) {
      return new ResponseEntity<>(deviceData, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @GetMapping("/{id}")
  public ResponseEntity<List<Device>> findById(@PathVariable("id") int id){
	  
	  try {
		  List<Device> users = deviceService.findDevicesByPlanId(id);
		  if(users == null) {
			  return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		  }
		  return new ResponseEntity<List<Device>>(users, HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
  
  @PostMapping("/newdevice")
  public ResponseEntity<Device> createUser(@RequestBody Device device) {
    System.out.println(device);
    try {
      Device _device = deviceService
          .add(new Device(device.getDeviceName(), device.getPhoneNumber(), device.getPlanId()));
      return new ResponseEntity<>(_device, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @PutMapping("/{id}")
  public ResponseEntity<Device> updateDevice(@PathVariable("id") int id, @RequestBody Device device) {
    Device deviceData = deviceService.findById(id);
    if (deviceData != null) {
        deviceData.setDeviceName(device.getDeviceName());
        deviceData.setPhoneNumber(device.getPhoneNumber());
        deviceData.setPlanId(device.getPlanId());
      return new ResponseEntity<>(deviceService.add(deviceData), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<HttpStatus> deleteDelete(@PathVariable("id") int id) {
    try {
        deviceService.delete(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // @PreAuthorize("hasAuthority('ADMIN')")
  // @DeleteMapping("/user")
  // public ResponseEntity<HttpStatus> deleteAllUsers() {
  //   try {
  //     userService.deleteAll();
  //     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  //   } catch (Exception e) {
  //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
  //   }
  // }
  

  
  
}
