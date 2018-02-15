package com.elearning.service;


import java.util.Set;
import com.elearning.domain.User;
import com.elearning.domain.security.UserRole;

public interface UserService {
	
	User createUser(User user, Set<UserRole> userRoles);

	User findByUsername(String username);
	
	User findByEmail(String email);
	
	User save(User user);
	
	User findById(Long id);

	
}
