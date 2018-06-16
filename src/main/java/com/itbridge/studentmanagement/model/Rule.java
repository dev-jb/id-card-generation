package com.itbridge.studentmanagement.model;

public class Rule {

	private String text, name;
	private int before, after;

	public Rule(String _name, String _text, int _before, int _after) {
		name = _name;
		text = _text;
		before = _before;
		after = _after;
	}

	public String getName() {
		return name;
	}

	public String getText() {
		return text;
	}

	public int getBefore() {
		return before;
	}

	public int getAfter() {
		return after;
	}

	public String toString() {
		return "Text: '" + getText() + "'; " + getBefore() + " Zeilen davor, "
				+ getAfter() + " Zeilen danach";
	}
}
