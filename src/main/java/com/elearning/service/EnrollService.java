package com.elearning.service;

import com.elearning.domain.Delivery;
import com.elearning.domain.Enroll;

import java.util.List;

public interface EnrollService {

    List<Enroll> findAll();

    Enroll findeOne(Long id);

    Enroll save(Enroll enroll);

    void removeOne(Long id);

    List<Enroll> findByDelivery(Delivery delivery);
}
