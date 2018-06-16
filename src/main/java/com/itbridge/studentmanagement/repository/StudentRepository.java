package com.itbridge.studentmanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import com.itbridge.studentmanagement.model.Student;

@Component
public interface StudentRepository extends JpaRepository<Student, Integer> {

//	@Query(value = "SELECT * FROM student WHERE grade=:grade AND section=:section", nativeQuery=true)
//	List<Student> getStudentByGradeSection(@Param("grade") String grade, @Param("section") char section);
	
	List<Student> findAllByGradeAndSection(String grade, Character section);
}
