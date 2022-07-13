package com.claim.finalproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.claim.finalproject.dto.UserLoginDto;
import com.claim.finalproject.dto.UserRequestDto;
import com.claim.finalproject.entity.User;
import com.claim.finalproject.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("user")
public class UserController {
	
	private UserService userService;
	
	@Autowired
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@PostMapping("/register")
	@ResponseBody
	public User registerUser(@RequestBody UserRequestDto userRequestDto) {
		return userService.registerUser(userRequestDto);
	}
	
	@PostMapping("/login")
	@ResponseBody
	public User loginUser(@RequestBody UserLoginDto userLoginDto) {
		return userService.loginUser(userLoginDto);
	}
}
