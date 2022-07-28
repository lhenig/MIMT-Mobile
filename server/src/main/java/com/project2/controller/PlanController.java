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

import com.project2.beans.Plan;
import com.project2.beans.Plan;
import com.project2.services.PlanService;
import com.project2.services.UserServiceV1;

@EnableGlobalMethodSecurity(jsr250Enabled = false, prePostEnabled = true, securedEnabled = false)
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/plans")
public class PlanController {

  @Autowired
  PlanService planService;
  
  // Just for testing
  @GetMapping("/authed")
  public ResponseEntity<List<Plan>> getUsers(HttpServletResponse response) {
    List<Plan> planData = planService.findAllPlans();
    response.getHeader("cookie");
    if (!planData.isEmpty()) {
      return new ResponseEntity<>(planData, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

    
  @GetMapping("/{id}")
  public ResponseEntity<List<Plan>> findByUserId(@PathVariable("id") int id){
	  
	  try {
		  List<Plan> plans = planService.findPlanByUserId(id);
		  if(plans == null) {
			  return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		  }
		  return new ResponseEntity<List<Plan>>(plans, HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
    @GetMapping("/plan/{id}")
  public ResponseEntity<Plan> findByPlanId(@PathVariable("id") int id){
	  
	  try {
		  Plan plans = planService.findById(id);
		  if(plans == null) {
			  return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		  }
		  return new ResponseEntity<Plan>(plans, HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }

    @PutMapping("/update/{id}")
  public ResponseEntity<Plan> updateByPlanId(@PathVariable("id") int id, @RequestBody Plan plan){
	  
	  try {
		  Plan newPlan = planService.findById(id);
		  if(newPlan == null) {
			  return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		  }
      newPlan.setPlanName(plan.getPlanName());
      newPlan.setPrice(plan.getPrice());
      newPlan.setDeviceLimit(plan.getDeviceLimit());
		  return new ResponseEntity<Plan>(newPlan, HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }


  @PostMapping("/newplan")
  public ResponseEntity<Plan> createPlan(@RequestBody Plan plan) {
    Plan _plan = planService.findById(plan.getId());
    try {
      if(_plan == null) {
        _plan = planService.add(new Plan(plan.getPlanName(), plan.getDeviceLimit(), plan.getPrice(), plan.getUserId()));
      }
          
      return new ResponseEntity<>(_plan, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  // Not being used. Update Device.plan_id to change the plan devices
  // @PutMapping("/{id}")
  // public ResponseEntity<Plan> updatePlan(@PathVariable("id") int id, @RequestBody Plan plan) {
  //   Plan planData = planService.findById(id);
  //   if (planData != null) {
  //       planData.setPlanName(plan.getPlanName());
  //     return new ResponseEntity<>(planService.add(planData), HttpStatus.OK);
  //   } else {
  //     return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  //   }
  // }

  @DeleteMapping("/{id}")
  public ResponseEntity<HttpStatus> deletePlan(@PathVariable("id") int id) {
    try {
        planService.delete(id);
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
