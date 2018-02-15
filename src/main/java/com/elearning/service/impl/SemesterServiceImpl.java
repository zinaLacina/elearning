package com.elearning.service.impl;

import com.elearning.domain.Semester;
import com.elearning.repository.SemesterRepository;
import com.elearning.service.SemesterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SemesterServiceImpl implements SemesterService {

    @Autowired
    private SemesterRepository semesterRepository;

    @Override
    public List<Semester> findAll() {
        return (List<Semester>) semesterRepository.findAll();
    }

    @Override
    public Semester findeOne(Long id) {
        return semesterRepository.findOne(id);
    }

    @Override
    public Semester save(Semester semester) {
        return semesterRepository.save(semester);
    }

    @Override
    public void removeOne(Long id) {
        semesterRepository.delete(id);
    }
}
