package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import com.project2.beans.UserClass;
import com.project2.data.UserRepository;

@Service
public class UserServiceV1 {
	
	@Autowired
	private UserRepository repo;
	
	public UserClass findById(int id){
		return repo.findById(id);
	}

	// For testing
	public List<UserClass> findAllUsers(){
		return repo.findAllUsers();
	}
	
	@Transactional(propagation = Propagation.REQUIRES_NEW)
	public UserClass add(UserClass user) {
		return repo.save(user);
	}

	@Transactional()
	public void delete(int user_id) {
		repo.delete(findById(user_id));
	}
}
