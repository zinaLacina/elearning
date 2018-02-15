package com.elearning.repository;

import com.elearning.domain.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student,Long> {
}
