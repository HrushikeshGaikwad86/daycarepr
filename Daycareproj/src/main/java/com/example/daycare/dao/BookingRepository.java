package com.example.daycare.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.daycare.pojo.Booking;


@Repository
@Transactional
public interface BookingRepository extends JpaRepository<Booking, Integer> {
	@Modifying
	@Query(value="select * from booking where date=?1 and daycare_id=?2",nativeQuery = true)
	public List<Booking> getBookedSeekers(String date,int daycare_id);
	
	@Modifying
	@Query(value="select * from booking where date=?1",nativeQuery = true)
	public List<Booking> getBookedSeekersForAdmin(String date);

}
