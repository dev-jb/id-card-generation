package com.itbridge.studentmanagement.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JOptionPane;

import org.apache.pdfbox.cos.COSDocument;
import org.apache.pdfbox.pdfparser.PDFParser;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.util.PDFTextStripper;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;

public class DocumentParser {

	File file;
	private List<String> lines = new ArrayList<String>();

	public List<String> parseDocument(File f) {
		this.file = f;
		String fileType = getFileEnding(f);
		try {
			if (fileType.equals("docx")) {
				readWordDocument();
			} else if (fileType.equals("xlsx")) {
				readExcelDocument();
			} else if (fileType.equals("pdf")) {
				readPDFDocument();
			} else {
				lines = Files.readAllLines(f.toPath(), Charset.defaultCharset());
			}
			return lines;
		} catch (IOException e) {
			System.err.println("File could not be read.");
		}
		return lines;
	}

	private String getFileEnding(File f) {
		int index = f.getName().lastIndexOf(".");
		System.out.println(f.getName());
		return f.getName().substring(index + 1);
	}

	private void readPDFDocument() {
		try {
			FileInputStream fs = new FileInputStream(file);
			String text = "";
			PDFParser parser = new PDFParser(fs);
			parser.parse();
			COSDocument cosDoc = parser.getDocument();
			PDFTextStripper pdfStripper = new PDFTextStripper();
			PDDocument pdDoc = new PDDocument(cosDoc);
			text = pdfStripper.getText(pdDoc);
			String[] docxLines = text.split(System.lineSeparator());
			for (String line : docxLines) {
				lines.add(line);
			}
			fs.close();
		} catch (Exception e) {
			JOptionPane.showMessageDialog(null, "Fehler in readPDFDocument", "Fehler", JOptionPane.ERROR_MESSAGE);
			e.printStackTrace();
		}
	}

	private void readExcelDocument() {
		try {
			FileInputStream fs = new FileInputStream(file);
			XSSFWorkbook wb = new XSSFWorkbook(fs);
			XSSFSheet sh;
			String text = "";
			for (int i = 0; i < wb.getNumberOfSheets(); i++) {
				sh = wb.getSheetAt(i);
				for (int j = sh.getFirstRowNum(); j <= sh.getLastRowNum(); j++) {
					XSSFRow currRow = sh.getRow(j);
					if (currRow == null || currRow.getFirstCellNum() == -1) {
						continue;
					} else {
						for (int k = currRow.getFirstCellNum(); k < currRow.getLastCellNum(); k++) {
							if (currRow.getCell(k, Row.RETURN_BLANK_AS_NULL) == null) {
								continue;
							} else {
								text += currRow.getCell(k) + "; ";
							}
						}
						text += System.lineSeparator();
					}
				}
			}
			fs.close();
			wb.close();
			String[] xlsxLines = text.split(System.lineSeparator());
			for (String line : xlsxLines) {
				lines.add(line);
			}
		} catch (IOException e) {
			JOptionPane.showMessageDialog(null, "Fehler in readExcelDocument", "Fehler", JOptionPane.ERROR_MESSAGE);
			e.printStackTrace();
		}
	}

	private void readWordDocument() {
		try {
			FileInputStream fs = new FileInputStream(file);
			XWPFDocument document;
			document = new XWPFDocument(OPCPackage.open(fs));
			XWPFWordExtractor docxReader = new XWPFWordExtractor(document);
			String text = docxReader.getText();
			docxReader.close();
			String[] docxLines = text.split("\n");
			for (String line : docxLines) {
				lines.add(line);
			}
			fs.close();
		} catch (InvalidFormatException e) {
			System.out.println("InvalidFormatException in readWordDocument" + e.getMessage());
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			System.out.println("FileNotFoundException in readWordDocument" + e.getMessage());
		} catch (IOException e) {
			System.out.println("IOException in readWordDocument" + e.getMessage());
			e.printStackTrace();
		}
	}

}
