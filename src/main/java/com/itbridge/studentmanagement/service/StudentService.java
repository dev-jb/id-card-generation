package com.itbridge.studentmanagement.service;

import java.util.List;

import com.itbridge.studentmanagement.model.Student;

public interface StudentService {

	public Student addStudent(Student student);
	
	public Student updateStudent(Student student);
	
	public List<Student> getAllStudentInfo();
	
	public Student getStudentInfoById(int id);
	
	public void deleteStudent(int id);
	
	public List<Student> getAllStudentByGradeAndSection(String grade, Character section);
}
