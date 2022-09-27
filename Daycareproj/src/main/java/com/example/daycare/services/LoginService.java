package com.example.daycare.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.daycare.pojo.Admin;
import com.example.daycare.pojo.Daycare;
import com.example.daycare.pojo.Login;
import com.example.daycare.pojo.Seeker;
import com.example.daycare.dao.AdminRepository;
import com.example.daycare.dao.DaycareRepository;
import com.example.daycare.dao.LoginRepository;
import com.example.daycare.dao.SeekerRepository;
@Service
public class LoginService {
	@Autowired
	LoginRepository login_repo; 
	@Autowired
	DaycareRepository daycare_repo;
	@Autowired
	SeekerRepository seeker_repo;
	@Autowired
	AdminRepository admin_repo;
	
	public Login save(Login l){
		return login_repo.save(l);
	}
	
	public Object checklogin(String uid,String pwd) {
		List<Object[]> l=login_repo.checkLogin(uid, pwd);
		Daycare d=null;
		Seeker s=null;
		Admin a=null;
		if(l.size()==1) {
			System.out.println(l.get(0)[0]+" : "+l.get(0)[1]);
			if(l.get(0)[0].equals("Admin")) {
				Optional <Admin> oa=admin_repo.findByLId((int)l.get(0)[1]);
				try {
					a=oa.get();
					System.out.println(a.getAdmin_id());
				}
				catch(Exception e) {
					a=null;
				}
				
			}
			else if(l.get(0)[0].equals("Daycare")) {
				Optional <Daycare> od=daycare_repo.findByLId((int)l.get(0)[1]);
				try {
					d=od.get();
					if(d.getStatus().equals("invalid")) {
						System.out.println(d.getDaycare_name());
						d=null;
					}
					
				}
				catch(Exception e) {
					d=null;
				}
				
			}
			else if(l.get(0)[0].equals("Seeker")) {
				Optional <Seeker> os=seeker_repo.findByLId((int)l.get(0)[1]);
				
				try {
					s=os.get();
					if(s.getStatus().equals("invalid")) {
						System.out.println(s.getFirst_name());
						s=null;	
					}
					
				}
				catch(Exception e) {
					s=null;	
				}	
			}
		}
		if(d!=null) {
			return d;
		}
		if(s!=null) {
			return s;
		}
		if(a!=null) {
			return a;
		}
		else {
			System.out.println("Else part");
			return null;
		}
	}
}
