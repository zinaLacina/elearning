package com.elearning.repository;

import com.elearning.domain.Lecturer;
import org.springframework.data.repository.CrudRepository;

public interface LecturerRepository extends CrudRepository<Lecturer,Long> {
}
