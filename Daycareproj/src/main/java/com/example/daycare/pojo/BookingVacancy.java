package com.example.daycare.pojo;

import java.util.Date;



public class BookingVacancy {	
	int booking_id;
	String candidate_first_name;
	String candidate_last_name;
	int age;
	String date;
	String card_no;
	double daycare_amount;
	double admin_amount;
	int daycare_id;
	int seeker_id;
	int vacancy;
	public BookingVacancy() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BookingVacancy(String candidate_first_name, String candidate_last_name, int age, String date, String card_no,
			double daycare_amount, double admin_amount, int daycare_id, int seeker_id, int vacancy) {
		super();
		this.candidate_first_name = candidate_first_name;
		this.candidate_last_name = candidate_last_name;
		this.age = age;
		this.date = date;
		this.card_no = card_no;
		this.daycare_amount = daycare_amount;
		this.admin_amount = admin_amount;
		this.daycare_id = daycare_id;
		this.seeker_id = seeker_id;
		this.vacancy = vacancy;
	}
	public int getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}
	public String getCandidate_first_name() {
		return candidate_first_name;
	}
	public void setCandidate_first_name(String candidate_first_name) {
		this.candidate_first_name = candidate_first_name;
	}
	public String getCandidate_last_name() {
		return candidate_last_name;
	}
	public void setCandidate_last_name(String candidate_last_name) {
		this.candidate_last_name = candidate_last_name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getCard_no() {
		return card_no;
	}
	public void setCard_no(String card_no) {
		this.card_no = card_no;
	}
	public double getDaycare_amount() {
		return daycare_amount;
	}
	public void setDaycare_amount(double daycare_amount) {
		this.daycare_amount = daycare_amount;
	}
	public double getAdmin_amount() {
		return admin_amount;
	}
	public void setAdmin_amount(double admin_amount) {
		this.admin_amount = admin_amount;
	}
	public int getDaycare_id() {
		return daycare_id;
	}
	public void setDaycare_id(int daycare_id) {
		this.daycare_id = daycare_id;
	}
	public int getSeeker_id() {
		return seeker_id;
	}
	public void setSeeker_id(int seeker_id) {
		this.seeker_id = seeker_id;
	}
	public int getVacancy() {
		return vacancy;
	}
	public void setVacancy(int vacancy) {
		this.vacancy = vacancy;
	}
	
	
	
	
}
