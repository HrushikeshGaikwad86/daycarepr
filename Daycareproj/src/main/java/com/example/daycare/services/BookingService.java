package com.example.daycare.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.daycare.pojo.Booking;
import com.example.daycare.pojo.BookingVacancy;
import com.example.daycare.pojo.Daycare;
import com.example.daycare.pojo.Seeker;
import com.example.daycare.pojo.Vacancy_Info;
import com.example.daycare.dao.BookingRepository;
import com.example.daycare.dao.DaycareRepository;
import com.example.daycare.dao.SeekerRepository;
import com.example.daycare.dao.VacancyRepository;

@Service
public class BookingService {
	
	@Autowired
	BookingRepository bookingrepo;
	@Autowired
	DaycareRepository daycarerepo;
	@Autowired
	SeekerRepository seekerrepo;
	@Autowired
	VacancyRepository vacancyrepo;
	
	public void saveBooking(BookingVacancy bv) {
		Daycare d=daycarerepo.findByDaycareID(bv.getDaycare_id());
		Seeker s=seekerrepo.findByLSeekerID(bv.getSeeker_id());
		double daycareAmount=d.getPrice()-(d.getPrice()*0.10);
		double adminAmount=d.getPrice()*0.10;
		Vacancy_Info vi=new Vacancy_Info(bv.getDate(), bv.getDaycare_id(), bv.getVacancy()-1);
		Booking b=new Booking(bv.getCandidate_first_name(), bv.getCandidate_last_name(), bv.getAge(), bv.getDate(), bv.getCard_no(), daycareAmount, adminAmount, d, s);
		List<Vacancy_Info> vi2=vacancyrepo.getVacancyObject(bv.getDate(), bv.getDaycare_id());
		if(vi2.size()==0) {
			vacancyrepo.save(vi);
		}
		else {
			vacancyrepo.updateVacancy(bv.getVacancy()-1, bv.getDate(), bv.getDaycare_id());
		}
		bookingrepo.save(b);
	}
	
	public List<Booking> getBookedSeekers(String date,int daycare_id){
		return bookingrepo.getBookedSeekers(date, daycare_id);	
	}
	public List<Booking> getBookedSeekersForAdmin(String date){
		return bookingrepo.getBookedSeekersForAdmin(date);	
	}

}
