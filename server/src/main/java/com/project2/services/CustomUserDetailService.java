package com.project2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project2.beans.UserClass;
import com.project2.data.Repository;


@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    Repository repo;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
         UserClass _user = repo.findByUserName(userName);
         
        if (_user == null) {
            throw new UsernameNotFoundException("test");
        }
        
        // Have to sign in as Kevin to Delete anything
        else if(_user.getUserName().equals("Kevin")) {
            UserDetails user = User.withUsername(_user.getUserName()).password(_user.getPassword()).authorities("ADMIN").build();
            System.out.println(_user.getUserName() + " has signed in" + user.getAuthorities());
            return user;
        }
        else{
            UserDetails user = User.withUsername(_user.getUserName()).password(_user.getPassword()).authorities("USER").build();
            return user;
        }
        
    }

    
    
}
