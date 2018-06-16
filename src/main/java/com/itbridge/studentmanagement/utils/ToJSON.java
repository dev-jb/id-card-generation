package com.itbridge.studentmanagement.utils;

import java.util.Iterator;
import java.util.List;

import org.json.JSONObject;

public class ToJSON {
	
	public static JSONObject convertToJson(List<String> lines) {
		
//		JSONObject profileJSON = new JSONObject();
		
		Iterator<String> iterator = lines.iterator();
		
		
		System.out.println(iterator.next());
		while(iterator.hasNext()) {
			System.out.println(iterator.next());
			System.out.println("*");
		}
		
//		while(iterator.hasNext()) {
//			
//			System.out.println(iterator.next());
//			
//		}
		
		return null;
	}
	
}
