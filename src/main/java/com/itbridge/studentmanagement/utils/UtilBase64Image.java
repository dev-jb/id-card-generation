package com.itbridge.studentmanagement.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

@Service
@Transactional
public class UtilBase64Image {

	public String encoder(String imagePath) {
		String base64Image = "";
		File file = new File(imagePath);
		try (FileInputStream imageInFile = new FileInputStream(file)) {
			// Reading a Image file from file system
			
			byte imageData[] = new byte[(int) file.length()];
			imageInFile.read(imageData);
			base64Image = Base64.getEncoder().encodeToString(imageData);
			return base64Image;
		} catch (FileNotFoundException e) {
			System.out.println("Image not found" + e);
		} catch (IOException ioe) {
			System.out.println("Exception while reading the Image " + ioe);
		}
		return null;
	}

	public List<String> encoderList(List<String> imagePath) {
		List<String> base64ImageList = new ArrayList<>();
		for (int i = 0; i < imagePath.size() ; i++) {
			File file = new File(imagePath.get(i));
			try (FileInputStream imageInFile = new FileInputStream(file)) {
				// Reading a Image file from file system
				String base64Image = "";
				byte imageData[] = new byte[(int) file.length()];
				imageInFile.read(imageData);
				base64Image = Base64.getEncoder().encodeToString(imageData);
				base64ImageList.add(base64Image);
			} catch (FileNotFoundException e) {
				System.out.println("Image not found" + e);
			} catch (IOException ioe) {
				System.out.println("Exception while reading the Image " + ioe);
			}
		}
		return base64ImageList;
	}
}
