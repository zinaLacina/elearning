package com.elearning.repository;


import com.elearning.domain.Delivery;
import com.elearning.domain.Lecturer;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface DeliveryRepository extends CrudRepository<Delivery, Long> {
    List<Delivery> findByLecturer(Lecturer lecturer);

}
