package com.claim.finalproject.service;

import com.claim.finalproject.dto.UserLoginDto;
import com.claim.finalproject.dto.UserRequestDto;
import com.claim.finalproject.entity.User;

public interface UserService {

	User registerUser(UserRequestDto userRequestDto);

	User loginUser(UserLoginDto userLoginDto);

}
