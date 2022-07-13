package com.claim.finalproject.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.claim.finalproject.entity.Vehicle;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@SuperBuilder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class VehicleRequestDto {
	
	@NotNull(message = "VIN is required")
	@NotBlank(message = "VIN cannot be blank")
	@JsonProperty(value ="vin")
	private String vin;
	
	@NotNull(message = "email is required")
	@NotBlank(message = "email cannot be blank")
	@JsonProperty(value ="email")
	private String email;
	
	@NotNull(message = "Make is required")
	@NotBlank(message = "Make cannot be blank")
	@JsonProperty(value ="make")
	private String make;
	
	@NotNull(message = "model is required")
	@NotBlank(message = "model cannot be blank")
	@JsonProperty(value ="model")
	private String model;
	
	@NotNull(message = "year is required")
	@NotBlank(message = "year cannot be blank")
	@JsonProperty(value ="year")
	private Integer year;

}
