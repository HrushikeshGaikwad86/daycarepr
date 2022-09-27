package com.example.daycare.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.daycare.pojo.Admin;


public interface AdminRepository extends JpaRepository<Admin, Integer> {
	
	@Query("from Admin a where login_id= :l_id")
	public Optional<Admin> findByLId(int l_id);

}
