package com.example.daycare.dao;





import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.daycare.pojo.Vacancy_Info;

@Repository
@Transactional
public interface VacancyRepository extends JpaRepository<Vacancy_Info, Integer> {
	
	@Modifying
	@Query(value="select  v.vacancy from vacancy_info v where date=?1 and daycare_id=?2",nativeQuery = true)
	public List<Integer> getVacancyByDateId(String date,int daycare_id);
	
	@Modifying
	@Query(value="select * from vacancy_info where date=?1 and daycare_id=?2",nativeQuery = true)
	public List<Vacancy_Info> getVacancyObject(String date,int daycare_id);
	
	@Modifying
	@Query(value="update vacancy_info set vacancy=?1 where date=?2 and daycare_id=?3",nativeQuery = true)
	public void updateVacancy(int vacancy,String date,int daycare_id);

}
