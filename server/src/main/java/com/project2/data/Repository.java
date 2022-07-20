package com.project2.data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import com.project2.beans.UserClass;
import java.util.List;
import java.util.Optional;

public interface Repository extends JpaRepository<UserClass, Integer>{
	
	
	public UserClass findById(int id);
	

	@Query( "SELECT u FROM UserClass u")
	public List<UserClass> findAllUsers();


	public UserClass findByUserName(String userName);

	
	
}
