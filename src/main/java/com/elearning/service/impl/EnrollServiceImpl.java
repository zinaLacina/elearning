package com.elearning.service.impl;

import com.elearning.domain.Delivery;
import com.elearning.domain.Enroll;
import com.elearning.repository.EnrollRepository;
import com.elearning.service.EnrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EnrollServiceImpl implements EnrollService {

    @Autowired
    private EnrollRepository enrollRepository;

    @Override
    public List<Enroll> findAll() {
        return (List<Enroll>) enrollRepository.findAll();
    }

    @Override
    public Enroll findeOne(Long id) {
        return enrollRepository.findOne(id);
    }

    @Override
    public Enroll save(Enroll enroll) {
        return enrollRepository.save(enroll);
    }

    @Override
    public void removeOne(Long id) {
        enrollRepository.delete(id);
    }

    @Override
    public List<Enroll> findByDelivery(Delivery delivery) {
        return enrollRepository.findByDelivery(delivery);
    }
}
