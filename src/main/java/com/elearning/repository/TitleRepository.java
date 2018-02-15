package com.elearning.repository;

import com.elearning.domain.Title;
import org.springframework.data.repository.CrudRepository;

public interface TitleRepository extends CrudRepository<Title, Long> {
}
