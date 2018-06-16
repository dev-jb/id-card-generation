package com.itbridge.studentmanagement.service;

import java.util.List;
import java.util.Optional;

import com.itbridge.studentmanagement.model.School;

public interface SchoolService {

	public School addSchool(School school);
	
	public School getSchoolInfoById(int id);
	
	public boolean updateTemplate(int id);
	
}
