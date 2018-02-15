package com.elearning.service.impl;

import com.elearning.domain.Lecturer;
import com.elearning.repository.LecturerRepository;
import com.elearning.service.LecturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LecturerServiceImpl implements LecturerService {

    @Autowired
    private LecturerRepository lecturerRepository;


    @Override
    public List<Lecturer> findAll() {
        return (List<Lecturer>) lecturerRepository.findAll();
    }

    @Override
    public Lecturer findeOne(Long id) {
        return lecturerRepository.findOne(id);
    }

    @Override
    public Lecturer save(Lecturer lecturer) {
        return lecturerRepository.save(lecturer);
    }

    @Override
    public void removeOne(Long id) {
        lecturerRepository.delete(id);
    }
}
