package com.elearning.service.impl;

import com.elearning.domain.Title;
import com.elearning.repository.TitleRepository;
import com.elearning.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TitleServiceImpl implements TitleService {

    @Autowired
    private TitleRepository titleRepository;

    @Override
    public List<Title> findAll() {
        return (List<Title>)titleRepository.findAll();
    }

    @Override
    public Title findeOne(Long id) {
        return titleRepository.findOne(id);
    }

    @Override
    public Title save(Title title) {
        return titleRepository.save(title);
    }

    @Override
    public void removeOne(Long id) {
        titleRepository.delete(id);
    }
}
