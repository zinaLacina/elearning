package com.elearning.service;

import com.elearning.domain.Level;

import java.util.List;

public interface LevelService {

    List<Level> findAll();

    Level findeOne(Long id);

    Level save(Level course);

    void removeOne(Long id);
}
