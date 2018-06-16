package com.itbridge.studentmanagement.utils;

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

//@Service
//@Transactional
public class ImageUploadUtil {

	private static String path = "D:/My Files/My Projects/ITBridgeNepal/StudentManagement/FrontEnd/src/assets/student-image/";

	public static String writeImageToFile(MultipartFile file) {
		String imageUploadPath = path + file.getOriginalFilename();
		try {
			byte[] bytes= file.getBytes();
			BufferedOutputStream bout; 
			bout = new BufferedOutputStream(new FileOutputStream(imageUploadPath));
			bout.write(bytes);
			bout.flush();
			bout.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return imageUploadPath;
	}
}
