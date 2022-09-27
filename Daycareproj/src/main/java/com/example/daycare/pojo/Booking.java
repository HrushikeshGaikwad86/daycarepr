package com.example.daycare.pojo;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="booking")
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	int booking_id;
	@Column
	String candidate_first_name;
	@Column
	String candidate_last_name;
	@Column
	int age;
	@Column
	String date;
	@Column
	String card_no;
	@Column
	double daycare_amount;
	@Column
	double admin_amount;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="daycare_id")
	Daycare daycare;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="seeker_id")
	Seeker seeker;
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Booking(String candidate_first_name, String candidate_last_name, int age, String date, String card_no,
			double daycare_amount, double admin_amount, Daycare daycare, Seeker seeker) {
		super();
		this.candidate_first_name = candidate_first_name;
		this.candidate_last_name = candidate_last_name;
		this.age = age;
		this.date = date;
		this.card_no = card_no;
		this.daycare_amount = daycare_amount;
		this.admin_amount = admin_amount;
		this.daycare = daycare;
		this.seeker = seeker;
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
	public Daycare getDaycare() {
		return daycare;
	}
	public void setDaycare(Daycare daycare) {
		this.daycare = daycare;
	}
	public Seeker getSeeker() {
		return seeker;
	}
	public void setSeeker(Seeker seeker) {
		this.seeker = seeker;
	}
	
	
}
