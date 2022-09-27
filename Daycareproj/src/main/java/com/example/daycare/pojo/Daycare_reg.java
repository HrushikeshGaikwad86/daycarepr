package com.example.daycare.pojo;



public class Daycare_reg {

	int daycare_id;
	String daycare_name;
	String address;
	String area;
	String pincode;
	String contact_no;
	String license_no;
	String password;
	String email_id;
	String ow_first_name;
	String ow_last_name;
	String aadhar_no;	
	String ow_contact_no;
	String daycare_type;
	int capacity;
	double price;
	String timing;
	String answer;
	String status="invalid";
	
	public Daycare_reg() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Daycare_reg(int daycare_id, String daycare_name, String address, String area, String pincode,
			String contact_no, String license_no, String password, String email_id, String ow_first_name,
			String ow_last_name, String aadhar_no, String ow_contact_no, String daycare_type, int capacity,
			double price, String timing, String answer) {
		super();
		this.daycare_id = daycare_id;
		this.daycare_name = daycare_name;
		this.address = address;
		this.area = area;
		this.pincode = pincode;
		this.contact_no = contact_no;
		this.license_no = license_no;
		this.password = password;
		this.email_id = email_id;
		this.ow_first_name = ow_first_name;
		this.ow_last_name = ow_last_name;
		this.aadhar_no = aadhar_no;
		this.ow_contact_no = ow_contact_no;
		this.daycare_type = daycare_type;
		this.capacity = capacity;
		this.price = price;
		this.timing = timing;
		this.answer = answer;
	}


	public Daycare_reg(String daycare_name, String address, String area, String pincode, String contact_no,
			String license_no, String password, String email_id, String ow_first_name, String ow_last_name,
			String aadhar_no, String ow_contact_no, String daycare_type, int capacity, double price, String timing,
			String answer) {
		super();
		this.daycare_name = daycare_name;
		this.address = address;
		this.area = area;
		this.pincode = pincode;
		this.contact_no = contact_no;
		this.license_no = license_no;
		this.password = password;
		this.email_id = email_id;
		this.ow_first_name = ow_first_name;
		this.ow_last_name = ow_last_name;
		this.aadhar_no = aadhar_no;
		this.ow_contact_no = ow_contact_no;
		this.daycare_type = daycare_type;
		this.capacity = capacity;
		this.price = price;
		this.timing = timing;
		this.answer = answer;
	}

	public int getDaycare_id() {
		return daycare_id;
	}

	public void setDaycare_id(int daycare_id) {
		this.daycare_id = daycare_id;
	}

	public String getDaycare_name() {
		return daycare_name;
	}

	public void setDaycare_name(String daycare_name) {
		this.daycare_name = daycare_name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	public String getLicense_no() {
		return license_no;
	}

	public void setLicense_no(String license_no) {
		this.license_no = license_no;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getOw_first_name() {
		return ow_first_name;
	}

	public void setOw_first_name(String ow_first_name) {
		this.ow_first_name = ow_first_name;
	}

	public String getOw_last_name() {
		return ow_last_name;
	}

	public void setOw_last_name(String ow_last_name) {
		this.ow_last_name = ow_last_name;
	}

	public String getAadhar_no() {
		return aadhar_no;
	}

	public void setAadhar_no(String aadhar_no) {
		this.aadhar_no = aadhar_no;
	}

	public String getOw_contact_no() {
		return ow_contact_no;
	}

	public void setOw_contact_no(String ow_contact_no) {
		this.ow_contact_no = ow_contact_no;
	}

	public String getDaycare_type() {
		return daycare_type;
	}

	public void setDaycare_type(String daycare_type) {
		this.daycare_type = daycare_type;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getTiming() {
		return timing;
	}

	public void setTiming(String timing) {
		this.timing = timing;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
