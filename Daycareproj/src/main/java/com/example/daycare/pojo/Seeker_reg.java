package com.example.daycare.pojo;

public class Seeker_reg {
	
	int seeker_id;
	String first_name;
	String last_name;
	String email_id;
	String password;
	String address;
	String contact_no;
	String answer;
	String status="invalid";
	public Seeker_reg() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Seeker_reg(String first_name, String last_name, String email_id, String password, String address,
			String contact_no, String answer) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email_id = email_id;
		this.password = password;
		this.address = address;
		this.contact_no = contact_no;
		this.answer = answer;
	}
	public int getSeeker_id() {
		return seeker_id;
	}
	public void setSeeker_id(int seeker_id) {
		this.seeker_id = seeker_id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContact_no() {
		return contact_no;
	}
	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
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
