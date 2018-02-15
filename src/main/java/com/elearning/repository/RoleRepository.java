package com.elearning.repository;

import com.elearning.domain.security.Role;
import org.springframework.data.repository.CrudRepository;


public interface RoleRepository extends CrudRepository<Role, Long> {

}
