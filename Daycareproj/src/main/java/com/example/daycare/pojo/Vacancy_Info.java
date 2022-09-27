package com.example.daycare.pojo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vacancy_info")
public class Vacancy_Info {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int vacancy_id;
	@Column
	String date;
	@Column
	int daycare_id;
	@Column
	int vacancy;
	public Vacancy_Info() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Vacancy_Info(String date, int daycare_id, int vacancy) {
		super();
		this.date = date;
		this.daycare_id = daycare_id;
		this.vacancy = vacancy;
	}
	public int getVacancy_id() {
		return vacancy_id;
	}
	public void setVacancy_id(int vacancy_id) {
		this.vacancy_id = vacancy_id;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getDaycare_id() {
		return daycare_id;
	}
	public void setDaycare_id(int daycare_id) {
		this.daycare_id = daycare_id;
	}
	public int getVacancy() {
		return vacancy;
	}
	public void setVacancy(int vacancy) {
		this.vacancy = vacancy;
	}
	
}
