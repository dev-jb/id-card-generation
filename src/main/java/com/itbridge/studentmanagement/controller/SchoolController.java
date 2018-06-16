package com.itbridge.studentmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itbridge.studentmanagement.model.School;
import com.itbridge.studentmanagement.service.SchoolService;
import com.itbridge.studentmanagement.utils.UtilBase64Image;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/api")
public class SchoolController {

	@Autowired
	private SchoolService schoolService;

	@Autowired
	private UtilBase64Image utilBase64Image;

	// @PostMapping("/school")
	// public School addSchoolInfo(@RequestBody School school) {
	// return schoolService.addSchool(school);
	// }

	@GetMapping("/school/{id}")
	public School getSchoolById(@PathVariable int id) {
		School schoolInfo = schoolService.getSchoolInfoById(id);
		String base64Banner = utilBase64Image.encoder(schoolInfo.getIdCardTemplate());
		School s = new School();
		s.setIdCardTemplate(base64Banner);
		return s;
	}
	
}
