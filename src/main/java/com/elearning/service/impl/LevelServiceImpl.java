package com.elearning.service.impl;

import com.elearning.domain.Level;
import com.elearning.repository.LevelRepository;
import com.elearning.service.LevelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LevelServiceImpl implements LevelService {

    @Autowired
    private LevelRepository levelRepository;

    @Override
    public List<Level> findAll() {
        return (List<Level>)this.levelRepository.findAll();
    }

    @Override
    public Level findeOne(Long id) {
        return this.levelRepository.findOne(id);
    }

    @Override
    public Level save(Level course) {
        return this.levelRepository.save(course);
    }

    @Override
    public void removeOne(Long id) {
        this.levelRepository.delete(id);
    }
}
