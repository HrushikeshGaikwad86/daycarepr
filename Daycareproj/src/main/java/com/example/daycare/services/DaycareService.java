package com.example.daycare.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.daycare.pojo.Daycare;
import com.example.daycare.pojo.Daycare_reg;
import com.example.daycare.pojo.Seeker;
import com.example.daycare.dao.DaycareRepository;

@Service
public class DaycareService {
	
	@Autowired
	DaycareRepository dayrepo;
	
	public List <Daycare> getAll(){
		return dayrepo.findAll();
	}
	public Daycare save(Daycare c){
		return dayrepo.save(c);
	}
	
	
	public Optional<Daycare> findByLoginID(int l_id) {
		return dayrepo.findByLId(l_id);
	}
	
	public int validateDaycare(String val,int login_id) {
		return dayrepo.updateDaycareStatus(val,login_id);
	}
	public List<Daycare> invalidDaycare(String val) {
		return dayrepo.invalidRegDaycare(val);
	}
	
	public int editProfileDaycare(Daycare_reg d) {
		return dayrepo.editDaycareProfile(d.getDaycare_name(), d.getEmail_id(), d.getOw_first_name(), d.getOw_last_name(), d.getOw_contact_no(), d.getAnswer(), d.getAadhar_no());
	}
	public List<String> getArea(String val){
		return dayrepo.getArea(val);
	}
	public List<Daycare> getDaycareByAT(String area,String dtype,String val){
		return dayrepo.getDaycareByAreaType(area, dtype,val);
	}
}
