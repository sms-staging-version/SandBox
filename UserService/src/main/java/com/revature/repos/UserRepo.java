package com.revature.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.User;

@Repository
public interface UserRepo extends JpaRepository<User,Integer>{
	public User findOneByUserId( int id);

	public List<User> findAllByCohortsCohortId(int id);

	public User findByEmailIgnoreCase(String email);
	
	public User findByEmail(String email);
	
}
