package com.elearning.service;

import com.elearning.domain.Delivery;
import com.elearning.domain.Lecturer;

import java.util.List;

public interface DeliveryService {

    List<Delivery> findAll();

    Delivery findeOne(Long id);

    Delivery save(Delivery delivery);

    void removeOne(Long id);

    List<Delivery> findByLecturer(Lecturer lecturer);
}
