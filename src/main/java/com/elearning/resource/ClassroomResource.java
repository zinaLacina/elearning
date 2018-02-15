package com.elearning.resource;

import com.elearning.domain.Classroom;
import com.elearning.service.ClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/classroom")
public class ClassroomResource {

    @Autowired
    private ClassroomService classroomService;

    @RequestMapping("/list")
    public List<Classroom> getCourseList() {
        return classroomService.findAll();
    }
}
