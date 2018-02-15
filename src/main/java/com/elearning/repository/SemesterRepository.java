package com.elearning.repository;

import com.elearning.domain.Semester;
import org.springframework.data.repository.CrudRepository;

public interface SemesterRepository extends CrudRepository<Semester,Long> {
}
