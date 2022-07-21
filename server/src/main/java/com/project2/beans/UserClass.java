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

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

@Entity
@Table(name = "users")
public class UserClass {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "userName")
	private String userName;

	@Column(name = "email")
	private String email;
	
	@Column(name = "pass_key")
	private String password;

	

	public UserClass() {}
	
	
	public UserClass(String name, String email, String password) {
		super();
		this.userName = name;
		this.email = email;
		this.password = password;
	}

	// @PreAuthorize("hasAuthority('ADMIN')")
	public int getId(){
		return id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String toString() {
		return "UserClass [id=" + id + ", name= " + userName + "]/n";
	}

	

	
}
