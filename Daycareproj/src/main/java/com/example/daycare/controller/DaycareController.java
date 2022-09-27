package com.example.daycare.controller;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.daycare.pojo.Booking;
import com.example.daycare.pojo.BookingVacancy;
import com.example.daycare.pojo.Daycare;
import com.example.daycare.pojo.Daycare_reg;
import com.example.daycare.pojo.Login;
import com.example.daycare.pojo.Seeker;
import com.example.daycare.pojo.Seeker_reg;
import com.example.daycare.services.BookingService;
import com.example.daycare.services.DaycareService;
import com.example.daycare.services.LoginService;
import com.example.daycare.services.SeekerService;
import com.example.daycare.services.VacancyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DaycareController {
	@Autowired
	DaycareService daycareservice;
	@Autowired
	LoginService loginservice;
	@Autowired
	SeekerService seekerservice;
	@Autowired
	VacancyService vacancyservice;
	@Autowired
	BookingService bookingservice;
	
	@GetMapping("/alldaycares")
	public List <Daycare> getAll(){
		return daycareservice.getAll();
		
	}
	
	@PostMapping("/savedaycare")
	public Daycare_reg saveDaycare(@RequestBody Daycare_reg d){
		Login l=new Login(d.getEmail_id(),d.getPassword(),"Daycare");
		Login inserted=loginservice.save(l);
		Daycare daycare=new Daycare(d.getDaycare_name(), d.getAddress(),d.getArea(), d.getPincode(), d.getContact_no(), d.getLicense_no(), d.getOw_first_name(), d.getOw_last_name(), d.getAadhar_no(), d.getOw_contact_no(), d.getDaycare_type(), d.getCapacity(), d.getPrice(), d.getTiming(), d.getAnswer(), inserted);
		Daycare daycare_save=daycareservice.save(daycare);
		return d;
	}
	@PostMapping("/saveseeker")
	public Seeker_reg saveSeeker(@RequestBody Seeker_reg s){
		Login l=new Login(s.getEmail_id(),s.getPassword(),"Seeker");
		Login inserted=loginservice.save(l);
		Seeker seeker=new Seeker(s.getFirst_name(), s.getLast_name(), s.getAddress(), s.getContact_no(), s.getAnswer(), inserted);
		Seeker seeker_save=seekerservice.save(seeker);
		return s;
	}
	

	@PostMapping("/checklogin")	
	public Object checkLogin(@RequestBody Login l){
		System.out.println(l.getEmail_id());
		return loginservice.checklogin(l.getEmail_id(), l.getPassword());
	}
	
	@GetMapping("/allseekers")	
	public List <Seeker> getallseekers(){
		return seekerservice.getAll();
	}
	
	@GetMapping("/validateseeker")	
	public int validateRegSeeker(String val,@RequestParam ("login_id") int login_id){
		val="valid";
		return seekerservice.validateSeeker(val,login_id);
	}
	@GetMapping("/invalidateseeker")	
	public int invalidateRegSeeker(String val,@RequestParam ("login_id") int login_id){
		val="invalid";
		return seekerservice.validateSeeker(val,login_id);
	}
	@GetMapping("/validatedaycare")	
	public int validateRegDaycare(String val,@RequestParam ("login_id") int login_id){
		val="valid";
		return daycareservice.validateDaycare(val,login_id);
	}
	@GetMapping("/invalidatedaycare")	
	public int invalidateRegDaycare(String val,@RequestParam ("login_id") int login_id){
		val="invalid";
		return daycareservice.validateDaycare(val,login_id);
	}
	
	@GetMapping("/getinvaliddaycare")
	public List<Daycare> invalidRegDaycare(String val) {
		val="invalid";
		return daycareservice.invalidDaycare(val);
	}
	@GetMapping("/getinvalidseeker")
	public List<Seeker> invalidRegSeeker(String val) {
		val="invalid";
		return seekerservice.invalidSeeker(val);
	}
	@GetMapping("/getvalidseeker")
	public List<Seeker> validRegSeekers(String val) {
		val="valid";
		return seekerservice.invalidSeeker(val);
	}
	
	@GetMapping("/getvaliddaycare")
	public List<Daycare> validRegDaycare(String val) {
		val="valid";
		return daycareservice.invalidDaycare(val);
	}
	
	@PostMapping("/editdaycareprofile")	
	public int checkLogin(@RequestBody Daycare_reg d){
		System.out.println(d.getAadhar_no());
		return daycareservice.editProfileDaycare(d);
	}
	
	@GetMapping("/getarea")
	public List<String> getAreas() {
		return daycareservice.getArea("valid");
	}
	
	@GetMapping("/getdaycaresbyareatype")	
	public List<Daycare> getDaycareByAreaAndDtype(@RequestParam ("area") String area,@RequestParam ("daycare_type") String daycare_type){
		System.out.println(area);
		System.out.println(daycare_type);
	
		return daycareservice.getDaycareByAT(area, daycare_type,"valid");
	}
	
	@PostMapping("/editseekerprofile")	
	public int editSeekerProfile(@RequestBody Seeker_reg s){
		System.out.println(s.getSeeker_id());
		return seekerservice.editSeekerProfile(s);
	}
	
	@GetMapping("/getvacancybydateanddaycare")
	public List<Integer> getVacancy(@RequestParam("date")String date,@RequestParam ("daycare_id") int daycare_id)  {
		System.out.println(date);
		return vacancyservice.getvacancybydate(date, daycare_id);
	}
	
	@PostMapping("/savebooking")	
	public void saveBooking(@RequestBody BookingVacancy bv) throws ParseException{
		System.out.println(bv.getDate());	
		bookingservice.saveBooking(bv);
		
	}
	
	@GetMapping("/getbookedseekersinfo")
	public List<Booking> getBooking(@RequestParam("date")String date,@RequestParam ("daycare_id") int daycare_id)  {
		System.out.println(date);
		return bookingservice.getBookedSeekers(date, daycare_id);
	}
	
	@GetMapping("/getbookedseekersinfoforadmin")
	public List<Booking> getBookingForAdmin(@RequestParam("date")String date)  {
		System.out.println(date);
		return bookingservice.getBookedSeekersForAdmin(date);
	}
}


