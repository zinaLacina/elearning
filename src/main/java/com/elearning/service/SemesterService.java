package com.elearning.service;

import com.elearning.domain.Semester;

import java.util.List;

public interface SemesterService {

    List<Semester> findAll();

    Semester findeOne(Long id);

    Semester save(Semester semester);

    void removeOne(Long id);
}
