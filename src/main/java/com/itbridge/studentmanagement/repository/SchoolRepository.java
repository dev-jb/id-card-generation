package com.itbridge.studentmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import com.itbridge.studentmanagement.model.School;

@Component
public interface SchoolRepository extends JpaRepository<School, Integer> {

}
