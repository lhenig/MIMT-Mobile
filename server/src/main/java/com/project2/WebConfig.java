package com.project2;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Order(1)
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(jsr250Enabled = false, prePostEnabled = true, securedEnabled = false)
public class WebConfig extends WebSecurityConfigurerAdapter {
	protected void configure(HttpSecurity http) throws Exception {
		System.out.println("configuring");
		http.csrf().disable().cors().and()

				.authorizeRequests()
				.antMatchers("/user/**").hasAnyAuthority("USER", "ADMIN")
				.anyRequest().authenticated().and().formLogin()

				.defaultSuccessUrl("/user/users", true).and()
				.logout().logoutUrl("/logout").deleteCookies("JSESSIONID");
		// for logout you would send a post request to
		// http://localhost:8080/spring-mvc/logout
	}

}
