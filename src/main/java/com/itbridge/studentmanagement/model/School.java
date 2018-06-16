package com.itbridge.studentmanagement.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "school_info")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class School {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "school_id")
	private int schoolId;

	@Column(name = "school_name")
	private String schoolName;

	@Column(name = "address")
	private String address;

	@Column(name = "contact_no")
	private double contactNo;

	@Column(name = "id_card_template")
	private String idCardTemplate;

	public int getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(int schoolId) {
		this.schoolId = schoolId;
	}

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public double getContactNo() {
		return contactNo;
	}

	public void setContactNo(double contactNo) {
		this.contactNo = contactNo;
	}

	public String getIdCardTemplate() {
		return idCardTemplate;
	}

	public void setIdCardTemplate(String idCardTemplate) {
		this.idCardTemplate = idCardTemplate;
	}

	@Override
	public String toString() {
		return "School [schoolId=" + schoolId + ", schoolName=" + schoolName + ", address=" + address + ", contactNo="
				+ contactNo + ", idCardTemplate=" + idCardTemplate + "]";
	}

}
