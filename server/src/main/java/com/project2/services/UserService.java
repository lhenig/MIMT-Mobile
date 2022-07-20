package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import com.project2.beans.User;
import com.project2.data.Repository;

@Service
public class UserService {
	
	@Autowired
	private Repository repo;
	
	public User findByName(int id){
		return repo.findById(id);
	}
	
	@Transactional(propagation = Propagation.REQUIRES_NEW)
	public User add(User user) {
		return repo.save(user);
	}
}
