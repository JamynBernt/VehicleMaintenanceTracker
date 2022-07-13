package com.claim.finalproject.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.claim.finalproject.entity.User;

@Repository
public class UserDataAccessService {
	
	private JdbcTemplate jdbcTemplate;

	@Autowired
	public UserDataAccessService(JdbcTemplate jdbcTemplate) {
		super();
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public void registerUser(User user) {
		jdbcTemplate.update("INSERT INTO User( email, first_name, last_name, user_password) VALUES(?,?,?,?);",
				user.getEmail(),
				user.getFirstName(),
				user.getLastName(),
				user.getUserPassword());
	}
	
	public User loginUser(String userName, String userPassword) {
		
		String sql = "SELECT * FROM User WHERE email = ? AND user_password = ?;";
		try {
			User user = jdbcTemplate.queryForObject(sql, mapUserFromDb(), userName, userPassword);
			return user;
		} catch(EmptyResultDataAccessException e) {
			return null;
		}
	}
	
	private RowMapper<User> mapUserFromDb() {
		return (resultSet, i) -> {
			String email = resultSet.getString("email");
			String userPassword = resultSet.getString("user_password");
			String firstName = resultSet.getString("first_name");
			String lastName = resultSet.getString("last_name");
			return User.builder()
					.email(email)
					.firstName(firstName)
					.lastName(lastName)
					.userPassword(userPassword)
					.build();
		};
	}
}
