package com.claim.finalproject.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserLoginDto {
	
	@NotNull(message = "username is required")
	@NotBlank(message = "username cannot be blank")
	@JsonProperty(value ="userName")
	private String userName;
	
	@NotNull(message = "password is required")
	@NotBlank(message = "password cannot be blank")
	@JsonProperty(value ="userPassword")
	private String userPassword;

}
