package com.project2.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.project2.beans.Device;
import com.project2.data.DeviceRepository;

@Service
public class DeviceService {
	
	@Autowired
	private DeviceRepository repo;
	
	public Device findById(int id){
		return repo.findById(id);
	}

	// For testing
	public List<Device> findAllDevices(){
		return repo.findAllDevices();
	}
	
	@Transactional(propagation = Propagation.REQUIRES_NEW)
	public Device add(Device device) {
		return repo.save(device);
	}

	@Transactional()
	public void delete(int deviceId) {
		repo.delete(findById(deviceId));
	}

	public List<Device> findDevicesByPlanId(int planId) {
		return repo.findDevicesByPlanId(planId);
	}
}
