package com.elearning.resource;

import com.elearning.domain.Title;
import com.elearning.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/title")
public class TitleResource {

    @Autowired
    private TitleService titleService;

    @RequestMapping("/list")
    public List<Title> getCourseList() {
        return titleService.findAll();
    }
}
