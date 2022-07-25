package com.project2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.beans.UserClass;
import com.project2.data.UserRepository;

@Service
public class AppService {
    @Autowired
	private UserRepository repo;
	
	public Object findByName(Object id){
        System.out.println(id);
		return id;
	}
	
	
}
