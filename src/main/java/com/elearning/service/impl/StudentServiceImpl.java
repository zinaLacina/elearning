package com.elearning.service.impl;

import com.elearning.domain.Student;
import com.elearning.repository.StudentRepository;
import com.elearning.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public List<Student> findAll() {
        return (List<Student>) studentRepository.findAll();
    }

    @Override
    public Student findeOne(Long id) {
        return studentRepository.findOne(id);
    }

    @Override
    public Student save(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public void removeOne(Long id) {
        studentRepository.delete(id);
    }
}
