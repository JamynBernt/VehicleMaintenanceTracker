package com.claim.finalproject.mapper;

import org.springframework.stereotype.Component;

import com.claim.finalproject.dto.UserRequestDto;
import com.claim.finalproject.entity.User;

@Component
public class UserMapper {

	public User userRequestDtoToUser(UserRequestDto userRequestDto) {
		
		return User.builder()
				.email(userRequestDto.getEmail())
				.firstName(userRequestDto.getFirstName())
				.lastName(userRequestDto.getLastName())
				.userPassword(userRequestDto.getUserPassword())
				.build();
	}
}
