package com.itbridge.studentmanagement.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.itbridge.studentmanagement.model.Student;
import com.itbridge.studentmanagement.service.StudentService;
import com.itbridge.studentmanagement.utils.ImageUploadUtil;
import com.itbridge.studentmanagement.utils.UtilBase64Image;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/api")
public class StudentController {

	@Autowired
	private StudentService studentService;

	// @Autowired
	// private ImageUploadUtil imageUploadService;

	@Autowired
	private UtilBase64Image utilBase64Image;

	private String imageUploadPath = "";

	@PostMapping("/student")
	private Student addStudent(@RequestBody Student student) {
		student.setImagePath(this.imageUploadPath);
		return studentService.addStudent(student);
	}

	@PutMapping("/student")
	private Student updateStudent(@RequestBody Student student) {
		// student.setImagePath(this.imageUploadPath);
		String imagePath= studentService.getStudentInfoById(student.getStudentId()).getImagePath();
		student.setImagePath(imagePath);
		return studentService.updateStudent(student);
	}

	@DeleteMapping("/student/{id}")
	private boolean deleteStudentById(@PathVariable int id) {
		studentService.deleteStudent(id);
		return true;
	}

	@PostMapping("/fileUpload")
	private boolean fileUpload(@RequestParam("file") MultipartFile file) {
		this.imageUploadPath = ImageUploadUtil.writeImageToFile(file);
		System.out.println("Image Url=" + ImageUploadUtil.writeImageToFile(file));
		return false;
	}

	@GetMapping("/student")
	private List<Student> getAllStudentInfo() {
		List<Student> studentList = studentService.getAllStudentInfo();
		List<String> imagePathList = new ArrayList<>();
		for (int i = 0; i < studentList.size(); i++) {
			String imagePath;
			imagePath = studentList.get(i).getImagePath();
			imagePathList.add(imagePath);
		}
		List<String> base64ImageList = utilBase64Image.encoderList(imagePathList);
		for (int i = 0; i < base64ImageList.size(); i++) {
			studentList.get(i).setImagePath(base64ImageList.get(i));
		}
		System.out.println("The student list is: " + studentList);
		return studentList;
	}

	@GetMapping("/student/{id}")
	private Student getStudentInfoById(@PathVariable int id) {
		Student st = studentService.getStudentInfoById(id);
		String base64Data = utilBase64Image.encoder(st.getImagePath());
		System.out.println("The path is" + base64Data);
		st.setImagePath(base64Data);
		return st;
	}

	@GetMapping("/student/{grade}/{section}")
	private List<Student> getAllStudentByGradeAndSection(@PathVariable String grade, @PathVariable Character section) {
		List<Student> studentList = studentService.getAllStudentByGradeAndSection(grade, section);
		List<String> imagePathList = new ArrayList<>();
		for (int i = 0; i < studentList.size(); i++) {
			String imagePath = studentList.get(i).getImagePath();
			imagePathList.add(imagePath);
		}
		List<String> base64ImageList = utilBase64Image.encoderList(imagePathList);
		for (int i = 0; i < base64ImageList.size(); i++) {
			studentList.get(i).setImagePath(base64ImageList.get(i));
		}
		return studentList;
	}
}
