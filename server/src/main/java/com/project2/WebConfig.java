package com.project2;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.web.bind.annotation.CrossOrigin;

@Order(1)
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(jsr250Enabled = false, prePostEnabled = true, securedEnabled = false)
public class WebConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	UserDetailsService userDetailsService;

	@Bean("authenticationManager")
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
  
	
	protected void configure(HttpSecurity http) throws Exception {
		System.out.println("configuring");
		
		http
		.sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED).maximumSessions(1);
		
		http
			.cors()
		.and()
			.authorizeRequests()
			.antMatchers("/user/newuser").anonymous()
			.antMatchers("/**").hasAnyAuthority("USER", "ADMIN")
			.anyRequest().authenticated()
		.and()
			.formLogin()
				.defaultSuccessUrl("/user/authed").permitAll()
			.and()
				.logout().logoutUrl("/logout").deleteCookies("JSESSIONID");


		http.csrf().disable();
	}

	// Sending an Error response???
	
	private AuthenticationSuccessHandler successHandler() {
		return new AuthenticationSuccessHandler() {
			@Override
			public void onAuthenticationSuccess(HttpServletRequest httpServletRequest,
					HttpServletResponse httpServletResponse, Authentication authentication)
					throws IOException, ServletException {
						System.out.println("Login successful");
				httpServletResponse.setStatus(200, null);
			}
		};
	}
	
	private AuthenticationFailureHandler failureHandler() {
		return new AuthenticationFailureHandler() {
			@Override
			public void onAuthenticationFailure(HttpServletRequest httpServletRequest,
					HttpServletResponse httpServletResponse, AuthenticationException e)
					throws IOException, ServletException {
					System.out.println("Login Failure");
				httpServletResponse.setStatus(401);
			}
		};
	}

}
