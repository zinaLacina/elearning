package com.elearning.resource;

import com.elearning.config.SecurityUtility;
import com.elearning.domain.*;
import com.elearning.repository.ClassroomRepository;
import com.elearning.repository.LecturerRepository;
import com.elearning.repository.LevelRepository;
import com.elearning.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/rest/course")
public class CourseResource {

    @Autowired
    private CourseService courseService;
    @Autowired
    private DeliveryService deliveryService;
    @Autowired
    private LevelService levelService;
    @Autowired
    private ClassroomService classroomService;

    @Autowired
    private LecturerService lecturerService;
    @Autowired
    private SemesterService semesterService;

    /*@RequestMapping (value="/add", method= RequestMethod.POST)
    public Delivery addDeliveryPost(@RequestBody Delivery delivery) {
        System.out.println(delivery.toString());

        return delivery;
        //return course;
    }*/

    @RequestMapping (value="/add", method= RequestMethod.POST)
    public Delivery addDeliveryPost(@RequestBody HashMap<String, String> mapper)
            throws Exception {
        String courseclassroom = mapper.get("courseclassroom");
        String coursecode = mapper.get("coursecode");
        String coursecredit = mapper.get("coursecredit");
        String courselecturer = mapper.get("courselecturer");
        String courselevel = mapper.get("courselevel");
        String coursesemester = mapper.get("coursesemester");
        String courseslot = mapper.get("courseslot");
        String coursetitle = mapper.get("coursetitle");
        String courseweek = mapper.get("courseweek");

        //Course
        Course course = new Course();
        course.setTitle(coursetitle);
        course.setCredit(new Integer(coursecredit));
        course.setCourseCode(coursecode);
        course.setActive(true);
        Level level= levelService.findeOne(new Long(courselevel));
        course.setLevel(level);
        courseService.save(course);
        //delivery
        Delivery delivery = new Delivery();
        Classroom classroom = classroomService.findeOne(new Long(courseclassroom));
        delivery.setCourse(course);
        delivery.setClassroom(classroom);
        Lecturer lecturer = lecturerService.findeOne(new Long(courselecturer));
        delivery.setLecturer(lecturer);
        Semester semester = semesterService.findeOne(new Long(coursesemester));
        delivery.setSemester(semester);
        delivery.setTimeSlot(new Integer(courseslot));
        delivery.setWeekDelivery(new Integer(courseweek));


        return deliveryService.save(delivery);


        //System.out.println(delivery);
        //return new ResponseEntity("Delivery added with success", HttpStatus.OK);

    }

    @RequestMapping(value="/update", method= RequestMethod.POST)
    public Delivery editDelivery(@RequestBody HashMap<String, String> mapper){

        String id = mapper.get("id");
        if(!id.isEmpty()) {
            String courseclassroom = mapper.get("courseclassroom");
            String coursecode = mapper.get("coursecode");
            String coursecredit = mapper.get("coursecredit");
            String courselecturer = mapper.get("courselecturer");
            String courselevel = mapper.get("courselevel");
            String coursesemester = mapper.get("coursesemester");
            String courseslot = mapper.get("courseslot");
            String coursetitle = mapper.get("coursetitle");
            String courseweek = mapper.get("courseweek");


            Delivery delivery = deliveryService.findeOne(new Long(id));
            delivery.setWeekDelivery(new Integer(courseweek));
            delivery.setTimeSlot(new Integer(courseslot));
            //
            Lecturer lecturer = lecturerService.findeOne(new Long(courselecturer));
            delivery.setLecturer(lecturer);
            //semester
            Semester semester = semesterService.findeOne(new Long(coursesemester));
            delivery.setSemester(semester);
            //classroom
            Classroom classroom = classroomService.findeOne(new Long(courseclassroom));
            delivery.setClassroom(classroom);


            //course
            Course course = courseService.findeOne(delivery.getCourse().getId());
            course.setTitle(coursetitle);
            course.setActive(true);
            course.setCourseCode(coursecode);
            Level level = levelService.findeOne(new Long(courselevel));
            course.setLevel(level);
            //Update the course
            courseService.save(course);

            //update delivery
            deliveryService.save(delivery);
            return delivery;
        }else{
            return new Delivery();
        }

    }

    @RequestMapping("/list")
    public List<Course> getCourseList() {
        return courseService.findAll();
    }

    //Remove url
    @RequestMapping(value="/remove", method=RequestMethod.POST)
    public ResponseEntity remove(
            @RequestBody String id
    ) throws IOException {
        Delivery delivery = deliveryService.findeOne(Long.parseLong(id));
        courseService.removeOne(delivery.getCourse().getId());
        deliveryService.removeOne(delivery.getId());
        //String fileName = id+".png";

        //Files.delete(Paths.get("src/main/resources/static/image/book/"+fileName));

        return new ResponseEntity("Remove Success!", HttpStatus.OK);
    }


    //get a course parsing a ID
    @RequestMapping("/{id}")
    public Delivery getCourseDelivery(@PathVariable("id") Long id){
        Delivery delivery = deliveryService.findeOne(id);
        return delivery;
    }

    @RequestMapping(value="/searchCourse", method=RequestMethod.POST)
    public List<Course> searchCourse (@RequestBody String keyword) {
        List<Course> courseList = courseService.blurrySearch(keyword);

        return courseList;
    }


    @RequestMapping("/deliveries")
    public List<Delivery> getDeliveryList() {
        /*List deliveries = deliveryService.findAll();
        List result = new ArrayList(deliveries);*/
        return deliveryService.findAll();
    }

}
