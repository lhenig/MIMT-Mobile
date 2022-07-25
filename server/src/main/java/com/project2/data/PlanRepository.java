package com.project2.data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project2.beans.Plan;
import java.util.List;


public interface PlanRepository extends JpaRepository<Plan, Integer>{
	
	
	public Plan findById(int id);
	

	//For Testing
	@Query( "SELECT p FROM Plan p")
	public List<Plan> findAllPlans();


	public Plan findByPlanName(String planName);

	// Selects plans owned by specific user
	@Query( "SELECT p FROM Plan p WHERE p.userId = :id" )
    public List<Plan> findPlanByUserId(@Param("id") int id);

	// @Query("SELECT p FROM Plan p WHERE p.id = (SELECT max(p.id) FROM Plan p)")
	// public Plan findPlanById();
	
}
