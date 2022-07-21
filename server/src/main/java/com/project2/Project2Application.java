package com.project2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import com.project2.data.Repository;

@SpringBootApplication
public class Project2Application {
	
	@Autowired
	Repository repo;
	public static void main(String[] args) {
		SpringApplication.run(Project2Application.class, args);
	}
	 
}
