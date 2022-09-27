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
@Table(name="admin")
public class Admin { 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int admin_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login_id")
	
	Login login;
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Admin(Login login) {
		super();
		this.login = login;
	}
	public int getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
	}
	
}
