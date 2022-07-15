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
@Table(name = "plans")
public class Plan {
    
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

    @Column(name = "plan_name")
    private String planName;

    @Column(name = "device_limit")
    private int deviceLimit;   

    public Plan() {};

    public Plan( String planName, int deviceLimit) {
        super();
        this.planName = planName;
        this.deviceLimit = deviceLimit;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public int getDeviceLimit() {
        return deviceLimit;
    }

    public void setDeviceLimit(int deviceLimit) {
        this.deviceLimit = deviceLimit;
    }

    @Override
    public String toString() {
		return "Plan: [id=" + id + ", name= " + planName + ", Device Limit=" + deviceLimit + "]/n";
	}

    
}
