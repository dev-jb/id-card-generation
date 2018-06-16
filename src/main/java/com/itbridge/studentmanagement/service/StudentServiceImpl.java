package com.itbridge.studentmanagement.service;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.itbridge.studentmanagement.model.Student;
import com.itbridge.studentmanagement.repository.StudentRepository;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;

	@Override
	public Student addStudent(Student student) {
		student.setCardValidity("Mar 2018");
		return studentRepository.save(student);
	}

	@Override
	public Student updateStudent(Student student) {
		return studentRepository.save(student);
	}

	@Override
	public List<Student> getAllStudentInfo() {
		return studentRepository.findAll();
	}

	@Override
	public List<Student> getAllStudentByGradeAndSection(String grade, Character section) {
		return studentRepository.findAllByGradeAndSection(grade, section);
	}

	@Override
	public Student getStudentInfoById(int id) {
		return studentRepository.getOne(id);
	}

	@Override
	public void deleteStudent(int id) {
		studentRepository.deleteById(id);
	}

}
