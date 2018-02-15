package com.elearning.service.impl;

import com.elearning.domain.Classroom;
import com.elearning.repository.ClassroomRepository;
import com.elearning.service.ClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClassroomServiceImpl implements ClassroomService {

    @Autowired
    private ClassroomRepository classroomRepository;

    @Override
    public List<Classroom> findAll() {
        List<Classroom> bookList = (List<Classroom>) classroomRepository.findAll();

        List<Classroom> activeClassroomList = new ArrayList<>();

        for (Classroom classroom : bookList) {
            if(classroom.isActive()) {
                activeClassroomList.add(classroom);
            }
        }

        return activeClassroomList;
    }

    @Override
    public Classroom findeOne(Long id) {
        return classroomRepository.findOne(id);
    }

    @Override
    public Classroom save(Classroom classroom) {
        return classroomRepository.save(classroom);
    }

    @Override
    public void removeOne(Long id) {
        classroomRepository.delete(id);
    }
}
