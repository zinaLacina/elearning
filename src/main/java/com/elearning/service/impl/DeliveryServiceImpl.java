package com.elearning.service.impl;

import com.elearning.domain.Delivery;
import com.elearning.domain.Lecturer;
import com.elearning.repository.DeliveryRepository;
import com.elearning.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryServiceImpl implements DeliveryService {
    @Autowired
    private DeliveryRepository deliveryRepository;
    @Override
    public List<Delivery> findAll() {
        return (List<Delivery>) deliveryRepository.findAll();
    }

    @Override
    public Delivery findeOne(Long id) {
        return deliveryRepository.findOne(id);
    }

    @Override
    public Delivery save(Delivery delivery) {
        return deliveryRepository.save(delivery);
    }

    @Override
    public void removeOne(Long id) {
        deliveryRepository.delete(id);
    }

    @Override
    public List<Delivery> findByLecturer(Lecturer lecturer) {
        return deliveryRepository.findByLecturer(lecturer);
    }
}
