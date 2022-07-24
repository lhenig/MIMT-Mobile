package com.project2.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.project2.beans.Plan;
import com.project2.data.PlanRepository;

@Service
public class PlanService {
	
	@Autowired
	private PlanRepository repo;
	
	public Plan findById(int id){
		return repo.findById(id);
	}

	// For testing
	public List<Plan> findAllPlans(){
		return repo.findAllPlans();
	}
	
	@Transactional(propagation = Propagation.REQUIRES_NEW)
	public Plan add(Plan user) {
		return repo.save(user);
	}

	@Transactional()
	public void delete(int user_id) {
		repo.delete(findById(user_id));
	}

	public Plan findByName(String planName) {
		return repo.findByPlanName(planName);
	}
}
