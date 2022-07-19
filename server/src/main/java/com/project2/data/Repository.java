package com.project2.data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import com.project2.beans.User;
import java.util.List;
import java.util.Optional;

public interface Repository extends JpaRepository<User, Integer>{
	
	
	public User findById(int id);
	

	@Query( " SELECT u FROM User u")
	public List<User> findAllUsers();

	
	
}
