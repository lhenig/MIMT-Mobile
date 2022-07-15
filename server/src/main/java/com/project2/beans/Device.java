package com.project2.beans;

import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "devices")
public class Device {
    
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

    @Column(name = "device_name")
    private String deviceName;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "plan_id")
    private int planId;

    public String getDeviceName() {
        return deviceName;
    }

    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getPlanId() {
        return planId;
    }

    public void setPlanId(int planId) {
        this.planId = planId;
    }

    @Override
    public String toString() {
		return "Device: [id=" + id + ", name= " + deviceName + ", UserId=" + userId + ", planId=" + planId + "]/n";
	}

}