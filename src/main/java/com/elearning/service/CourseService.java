package com.elearning.service;

import com.elearning.domain.Course;

import java.util.List;

public interface CourseService {

    List<Course> findAll();

    Course findeOne(Long id);

    Course save(Course course);

    List<Course> blurrySearch(String title);

    void removeOne(Long id);
}

