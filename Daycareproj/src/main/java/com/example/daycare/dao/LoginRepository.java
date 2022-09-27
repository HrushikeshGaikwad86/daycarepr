package com.example.daycare.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.daycare.pojo.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
	
	@Query("select l.user_type,l.login_id from Login l where email_id= :uemail and password= :pwd")
	public List<Object[]> checkLogin(String uemail,String pwd);

}
