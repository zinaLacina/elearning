package com.elearning.repository;

import java.util.List;

import com.elearning.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
	User findByUsername(String username);
	User findByEmail(String email);
	List<User> findAll();
}
