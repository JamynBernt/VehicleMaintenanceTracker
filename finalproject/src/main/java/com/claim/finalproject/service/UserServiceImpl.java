package com.claim.finalproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.claim.finalproject.dto.UserLoginDto;
import com.claim.finalproject.dto.UserRequestDto;
import com.claim.finalproject.entity.User;
import com.claim.finalproject.mapper.UserMapper;
import com.claim.finalproject.repository.UserDataAccessService;

@Service 
public class UserServiceImpl implements UserService {
	
	private UserMapper userMapper;
	
	private UserDataAccessService userDataAccessService;
	
	@Autowired
	public UserServiceImpl(UserMapper userMapper, UserDataAccessService userDataAccessService) {
		super();
		this.userMapper = userMapper;
		this.userDataAccessService = userDataAccessService;
	}
	
	@Override
	public User registerUser(UserRequestDto userRequestDto) {
		User user = userMapper.userRequestDtoToUser(userRequestDto);
		
		userDataAccessService.registerUser(user);
		
		return user;
	}
	
	@Override
	public User loginUser(UserLoginDto userLoginDto) {
		// TODO Auto-generated method stub
		
		return userDataAccessService.loginUser(userLoginDto.getUserName(), userLoginDto.getUserPassword());
	}	
}
