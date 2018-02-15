package com.elearning.repository;

import com.elearning.domain.Course;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CourseRepository extends CrudRepository<Course, Long> {
    List<Course> findByTitleContaining(String keyword);
}
