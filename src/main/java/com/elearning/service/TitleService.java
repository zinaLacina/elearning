package com.elearning.service;

import com.elearning.domain.Title;

import java.util.List;

public interface TitleService{

    List<Title> findAll();

    Title findeOne(Long id);

    Title save(Title title);

    void removeOne(Long id);
}
