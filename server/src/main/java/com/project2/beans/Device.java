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
import javax.persistence.UniqueConstraint;

@Entity
@Table(
	name = "devices",
	uniqueConstraints=
            @UniqueConstraint(columnNames={"phone_number"}))
public class Device {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

    @Column(name = "device_name")
    private String deviceName;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "plan_id")
    private int planId;

    public Device() {}

    public Device( String deviceName, String phoneNumber, int planId) {
        this.deviceName = deviceName;
        this.phoneNumber = phoneNumber;
        this.planId = planId;
    }

    public int getId() {
        return id;
    }
    public String getDeviceName() {
        return deviceName;
    }

    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getPlanId() {
        return planId;
    }

    public void setPlanId(int planId) {
        this.planId = planId;
    }

    @Override
    public String toString() {
        return "Device [deviceName=" + deviceName + ", id=" + id + ", phoneNumber=" + phoneNumber + ", planId=" + planId + "]";
    }

}