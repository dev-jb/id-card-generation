package com.itbridge.studentmanagement.service;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.itbridge.studentmanagement.model.School;
import com.itbridge.studentmanagement.repository.SchoolRepository;

@Service
@Transactional
public class SchoolServiceImpl implements SchoolService {

	@Autowired
	private SchoolRepository schoolRepository;
	
	@Override
	public School addSchool(School school) {
		return schoolRepository.save(school);
	}

	@Override
	public School getSchoolInfoById(int id) {
		return schoolRepository.getOne(id);
	}

	@Override
	public boolean updateTemplate(int id) {
		// TODO Auto-generated method stub
		return false;
	}

}
