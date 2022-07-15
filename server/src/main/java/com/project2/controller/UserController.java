package com.project2.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.project2.beans.User;
import com.project2.data.Repository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
public class UserController {
  @Autowired
  Repository repo;
  
  @GetMapping("/users")
  public ResponseEntity<List<User>> getUsers() {
    List<User> userData = repo.findAll();
    if (!userData.isEmpty()) {
      return new ResponseEntity<>(userData, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  
  @PostMapping("/users")
  public ResponseEntity<User> createUser(@RequestBody User user) {
    try {
      User _user = repo
          .save(new User(user.getUserName()));
      return new ResponseEntity<>(_user, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @PutMapping("/users/{id}")
  public ResponseEntity<User> updateUser(@PathVariable("id") int id, @RequestBody User user) {
    Optional<User> userData = repo.findById(id);
    if (userData.isPresent()) {
      User _user = userData.get();
      _user.setUserName(user.getUserName());
      return new ResponseEntity<>(repo.save(_user), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  @DeleteMapping("/user/{id}")
  public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") int id) {
    try {
      repo.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @DeleteMapping("/user")
  public ResponseEntity<HttpStatus> deleteAllUsers() {
    try {
      repo.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @GetMapping("/users/{user_name}")
  public ResponseEntity<List<User>> findByName(@PathVariable("user_name") String name){
	  
	  try {
		  List<User> users = repo.findByUserName(name);
		  if(users.isEmpty()) {
			  return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		  }
		  return new ResponseEntity<>(users, HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
  
  
}
