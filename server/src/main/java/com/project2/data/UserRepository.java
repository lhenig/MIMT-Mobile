package com.project2.data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project2.beans.UserClass;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserClass, Integer>{
	
	
	public UserClass findById(int id);
	

	//For Testing
	@Query( "SELECT u FROM UserClass u")
	public List<UserClass> findAllUsers();


	// Used by CustomUserDetailService
	public UserClass findByEmail(String email);

	
}
