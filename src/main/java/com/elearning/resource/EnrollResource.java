package com.elearning.resource;

import com.elearning.domain.Delivery;
import com.elearning.domain.Enroll;
import com.elearning.service.DeliveryService;
import com.elearning.service.EnrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/enroll")
public class EnrollResource {

    @Autowired
    private EnrollService enrollService;
    @Autowired
    private DeliveryService deliveryService;

    //get enroll for a delivery
    //get a course parsing a ID
    @RequestMapping("/delivery/{id}")
    public List<Enroll> getCourseDelivery(@PathVariable("id") Long id){
        Delivery delivery = deliveryService.findeOne(id);
        List<Enroll> enroll = enrollService.findByDelivery(delivery);
        return enroll;
    }

    @RequestMapping("/list")
    public List<Enroll> getCourseList() {
        return enrollService.findAll();
    }


}
