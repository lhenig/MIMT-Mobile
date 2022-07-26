package com.project2.controller;

import java.util.List;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.project2.beans.UserClass;
import com.project2.data.UserRepository;
import com.project2.services.UserServiceV1;

import me.shib.java.rest.client.lib.ServiceResponse;

// Not working but leaving just in case

@EnableGlobalMethodSecurity(jsr250Enabled = false, prePostEnabled = true, securedEnabled = false)
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/auth")
public class LoginController {
  @Autowired
  UserServiceV1 userService;


  @GetMapping("/success")
  public ResponseEntity<String> loginSuccess(){
	  
	  
		 
		  return new ResponseEntity<String>("Authenticated", HttpStatus.OK);
	    
	  }
  

  // @PostMapping(value = "/success")
  // public ResponseEntity<UserClass> processLogin(@RequestBody UserClass user) {
    
  //   if (user != null) {
  //     UserClass _user = userService.findByName(user.getUserName());
  //     return new ResponseEntity<UserClass>(_user, HttpStatus.OK);
  //   } else {
  //     return new ResponseEntity<UserClass>(HttpStatus.NOT_FOUND);
  //   }
  // }

}