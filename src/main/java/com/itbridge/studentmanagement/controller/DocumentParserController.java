package com.itbridge.studentmanagement.controller;

import java.io.File;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.itbridge.studentmanagement.utils.DocumentParser;
import com.itbridge.studentmanagement.utils.ImageUploadUtil;
import com.itbridge.studentmanagement.utils.ToJSON;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/api")
public class DocumentParserController {

	@PostMapping("/parseDocument")
	public void parseDocument(@RequestParam MultipartFile file) {
		String filePath = ImageUploadUtil.writeImageToFile(file);
		
		File f = new File(filePath);
		
		DocumentParser parser = new DocumentParser();
		List<String> parsedDoc = parser.parseDocument(f);
		ToJSON.convertToJson(parsedDoc);
		System.out.println(parsedDoc);
	}
	
	
}
