package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.project2.beans.User;
import com.project2.data.repository;

@Service
public class service {
	@Autowired
	private repository repo;
	
	public List<User> findByName(String name){
		return repo.findByName(name);
	}
	
	@Transactional(propagation = Propagation.REQUIRES_NEW)
	public User add(User user) {
		return repo.save(user);
	}
}
