package com.elearning.service;

import com.elearning.domain.Classroom;

import java.util.List;

public interface ClassroomService {

    List<Classroom> findAll();

    Classroom findeOne(Long id);

    Classroom save(Classroom classroom);

    void removeOne(Long id);
}
