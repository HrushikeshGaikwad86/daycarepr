package com.example.daycare.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.daycare.pojo.Seeker;
import com.example.daycare.pojo.Seeker_reg;
import com.example.daycare.dao.SeekerRepository;

@Service
public class SeekerService {
	@Autowired
	SeekerRepository seeker_repo;
	public List <Seeker> getAll(){
		return seeker_repo.findAll();
	}
	public Seeker save(Seeker c){
		return seeker_repo.save(c);
	}
	public int validateSeeker(String val,int login_id) {
		return seeker_repo.updateSeekerStatus(val,login_id);
	}
	
	public List<Seeker> invalidSeeker(String val) {
		return seeker_repo.invalidRegSeeker(val);
	}
	
	public int editSeekerProfile(Seeker_reg s) {
		return seeker_repo.editSeekerProfile(s.getFirst_name(), s.getLast_name(), s.getEmail_id(), s.getAnswer(), s.getContact_no(),s.getAddress(), s.getSeeker_id());
	}
}
