package com.project2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import com.project2.beans.User;
import com.project2.data.repository;

@SpringBootApplication
@ComponentScan("com.project2")
public class Project2Application {
	
	@Autowired
	repository repo;
	public static void main(String[] args) {
		SpringApplication.run(Project2Application.class, args);
	}
	 
}
