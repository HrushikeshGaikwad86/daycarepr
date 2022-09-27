package com.example.daycare.pojo;

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
@Table(name="seeker")
public class Seeker {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int seeker_id;
	@Column
	String first_name;
	@Column
	String last_name;
	@Column
	String address;
	@Column
	String contact_no;
	@Column
	String answer;
	@Column
	String status="invalid";
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login_id")
	Login login;

	public Seeker() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Seeker(String first_name, String last_name, String address, String contact_no, String answer, Login login) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.address = address;
		this.contact_no = contact_no;
		this.answer = answer;
		this.login = login;
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

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}

}
