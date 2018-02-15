package com.elearning.resource;


import com.elearning.domain.Semester;
import com.elearning.service.SemesterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/semester")
public class SemesterResource {

    @Autowired
    private SemesterService semesterService;


    @RequestMapping("/list")
    public List<Semester> getCourseList() {
        return semesterService.findAll();
    }

}
