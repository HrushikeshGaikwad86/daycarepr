package com.example.daycare.dao;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.daycare.pojo.Seeker;

@Repository
@Transactional
public interface SeekerRepository extends JpaRepository<Seeker, Integer> {
	
	@Query("from Seeker s where login_id= :l_id")
	public Optional<Seeker> findByLId(int l_id);
	
	@Query("from Seeker s where seeker_id= :l_id")
	public Seeker findByLSeekerID(int l_id);
	
	@Query("from Seeker s where status= :val")
	public List<Seeker> invalidRegSeeker(String val);
	
	@Modifying
	@Query(value="update seeker set status=?1 where login_id=?2",nativeQuery = true)
	public int updateSeekerStatus(String val,int login_id);
	
	@Modifying
	@Query(value="update seeker s inner join login l on s.login_id=l.login_id set first_name=?1,last_name=?2,email_id=?3,answer=?4,contact_no=?5,address=?6 where seeker_id=?7",nativeQuery = true)
	public int editSeekerProfile(String first_name,String last_name,String email_id,String answer,String contact_no,String address,int seeker_id);

}
