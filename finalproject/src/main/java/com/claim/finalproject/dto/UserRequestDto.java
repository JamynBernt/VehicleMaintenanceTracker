package com.claim.finalproject.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserRequestDto {
	
	@NotNull(message = "email is required")
	@NotBlank(message = "email cannot be blank")
	@JsonProperty(value = "email")
	private String email;

	@NotNull(message = "First Name is required")
	@NotBlank(message = "First Name cannot be blank")
	@JsonProperty(value ="firstName")
	private String firstName;
	
	@NotNull(message = "Last Name is required")
	@NotBlank(message = "Last Name cannot be blank")
	@JsonProperty(value ="lastName")
	private String lastName;
	
	@NotNull(message = "Password is required")
	@NotBlank(message = "Password cannot be blank")
	@JsonProperty(value ="userPassword")
	private String userPassword;
}
