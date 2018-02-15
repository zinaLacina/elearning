package com.elearning.repository;

import com.elearning.domain.Delivery;
import com.elearning.domain.Enroll;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EnrollRepository extends CrudRepository<Enroll,Long>{
    List<Enroll> findByDelivery(Delivery delivery);
}
