package com.elearning.resource;

import com.elearning.domain.Delivery;
import com.elearning.domain.Lecturer;
import com.elearning.domain.Title;
import com.elearning.service.DeliveryService;
import com.elearning.service.LecturerService;
import com.elearning.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/rest/lecturer")
public class LecturerResource {

    @Autowired
    private LecturerService lecturerService;
    @Autowired
    private DeliveryService deliveryService;

    @Autowired
    private TitleService titleService;

    @RequestMapping("/list")
    public List<Lecturer> getCourseList() {
        return lecturerService.findAll();
    }

    //Remove url
    @RequestMapping(value="/remove", method= RequestMethod.POST)
    public ResponseEntity remove(
            @RequestBody String id
    ) throws IOException {
        //Lecturer lecturer = lecturerService.findeOne(Long.parseLong(id));
        lecturerService.removeOne(Long.parseLong(id));
        //String fileName = id+".png";

        //Files.delete(Paths.get("src/main/resources/static/image/book/"+fileName));

        return new ResponseEntity("Remove Success!", HttpStatus.OK);
    }

    //get a lecturer parsing a ID
    @RequestMapping("/{id}")
    public Lecturer getLecturer(@PathVariable("id") Long id){
        Lecturer lecturer = lecturerService.findeOne(id);
        return lecturer;
    }

    //get a lecturer courses parsing a ID
    @RequestMapping("/{id}/courses")
    public List<Delivery> getLecturerCourse(@PathVariable("id") Long id){
        List<Delivery> delivery = deliveryService.findByLecturer(lecturerService.findeOne(id));
        return delivery;
    }


    @RequestMapping (value="/add", method= RequestMethod.POST)
    public Lecturer addLecturerPost(@RequestBody HashMap<String, String> mapper)
            throws Exception {
        String lecturername = mapper.get("lecturername");
        String lecturerlab = mapper.get("lecturerlab");
        String lecturercontact = mapper.get("lecturercontact");
        String lectureraddress = mapper.get("lectureraddress");
        String lecturertitle = mapper.get("lecturertitle");

        Lecturer lecturer = new Lecturer();
        lecturer.setLecturerAddress(lectureraddress);
        lecturer.setLecturerName(lecturername);
        lecturer.setLecturerLab(lecturerlab);
        lecturer.setLecturerContact(lecturercontact);
        Title title = titleService.findeOne(new Long(lecturertitle));
        lecturer.setTitle(title);

        return lecturerService.save(lecturer);


    }
    @RequestMapping (value="/update", method= RequestMethod.POST)
    public Lecturer updateLecturerPost(@RequestBody HashMap<String, String> mapper)
            throws Exception {
        String id = mapper.get("id");
        String lecturername = mapper.get("lecturername");
        String lecturerlab = mapper.get("lecturerlab");
        String lecturercontact = mapper.get("lecturercontact");
        String lectureraddress = mapper.get("lectureraddress");
        String lecturertitle = mapper.get("lecturertitle");

        Lecturer lecturer= lecturerService.findeOne(new Long(id));
        lecturer.setLecturerAddress(lectureraddress);
        lecturer.setLecturerName(lecturername);
        lecturer.setLecturerLab(lecturerlab);
        lecturer.setLecturerContact(lecturercontact);
        Title title = titleService.findeOne(new Long(lecturertitle));
        lecturer.setTitle(title);


        return lecturerService.save(lecturer);


    }

}
