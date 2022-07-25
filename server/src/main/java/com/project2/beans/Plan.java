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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

    @Column(name = "plan_name")
    private String planName;

    @Column(name = "device_limit")
    private int deviceLimit;  
    
    @Column(name="price")
    private float price;

    @Column(name="user_id")
    private int userId;

    public Plan() {};

    public Plan(String planName, int deviceLimit, float price, int userId) {
        this.planName = planName;
        this.deviceLimit = deviceLimit;
        this.price = price;
        this.userId = userId;
    }

    public int getId() { 
        return id;
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
    
    public float getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Plan [deviceLimit=" + deviceLimit + ", id=" + id + ", planName=" + planName + ", price=" + price
                + ", userId=" + userId + "]";
    }

    

    
}
