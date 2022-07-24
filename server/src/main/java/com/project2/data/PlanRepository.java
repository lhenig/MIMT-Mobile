package com.project2.data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project2.beans.Plan;
import java.util.List;


public interface PlanRepository extends JpaRepository<Plan, Integer>{
	
	
	public Plan findById(int id);
	

	//For Testing
	@Query( "SELECT p FROM Plan p")
	public List<Plan> findAllPlans();


	// Used by CustomUserDetailService
	public Plan findByPlanName(String planName);

	
}
