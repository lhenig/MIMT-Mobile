package com.project2.data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.project2.beans.UserClass;
import java.util.List;

public interface Repository extends JpaRepository<UserClass, Integer>{
	
	
	public UserClass findById(int id);
	

	@Query( "SELECT u FROM UserClass u")
	public List<UserClass> findAllUsers();


	public UserClass findByUserName(String userName);

	
	
}
