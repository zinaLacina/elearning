package com.elearning.resource;

import com.elearning.domain.Student;
import com.elearning.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/student")
public class StudentResource {

    @Autowired
    private StudentService studentService;

    @RequestMapping("/list")
    public List<Student> getCourseList() {
        return studentService.findAll();
    }

}
