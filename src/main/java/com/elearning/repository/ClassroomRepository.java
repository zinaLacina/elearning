package com.elearning.repository;

import com.elearning.domain.Classroom;
import org.springframework.data.repository.CrudRepository;

public interface ClassroomRepository extends CrudRepository<Classroom, Long> {
}
