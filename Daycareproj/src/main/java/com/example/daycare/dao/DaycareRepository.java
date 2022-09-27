package com.example.daycare.dao;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.daycare.pojo.Daycare;
import com.example.daycare.pojo.Seeker;

@Repository
@Transactional
public interface DaycareRepository extends JpaRepository<Daycare, Integer> {
	
	@Query("from Daycare d where login_id= :l_id")
	public Optional<Daycare> findByLId(int l_id);
	
	@Query("from Daycare d where daycare_id= :l_id")
	public Daycare findByDaycareID(int l_id);
	
	@Modifying
	@Query(value="select distinct d.area from daycare d where status=?1",nativeQuery = true)
	public List<String> getArea(String val);
	
	@Query("from Daycare d where status= :val")
	public List<Daycare> invalidRegDaycare(String val);
	@Modifying
	@Query(value="select * from daycare where area=?1 and daycare_type=?2 and status=?3",nativeQuery = true)
	public List<Daycare> getDaycareByAreaType(String area,String dtype,String val);
	
	@Modifying
	@Query(value="update daycare set status=?1 where login_id=?2",nativeQuery = true)
	public int updateDaycareStatus(String val,int login_id);
	
	@Modifying
	@Query(value="update daycare d inner join login l on d.login_id=l.login_id set daycare_name=?1,email_id=?2,ow_first_name=?3,ow_last_name=?4,ow_contact_no=?5,answer=?6 where aadhar_no=?7",nativeQuery = true)
	public int editDaycareProfile(String daycare_name,String email_id,String ow_first_name,String ow_last_name,String ow_contact_no,String answer,String aadhar_no);

}
