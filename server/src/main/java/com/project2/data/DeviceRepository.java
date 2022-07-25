package com.project2.data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project2.beans.Device;
import java.util.List;


public interface DeviceRepository extends JpaRepository<Device, Integer>{
	
	
	public Device findById(int id);
	

	//For Testing
	@Query( "SELECT d FROM Device d")
	public List<Device> findAllDevices();


	public Device findByDeviceName(String deviceName);

	// Selects devices owned by specific user
	@Query( "SELECT d FROM Device d WHERE d.planId = :id" )
    public List<Device> findDevicesByPlanId(@Param("id") int id);

	
}
