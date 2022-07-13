package com.claim.finalproject.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@SuperBuilder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class HistoryRequestDto {
	
	
	@NotNull(message = "VIN is required")
	@NotBlank(message = "VIN cannot be blank")
	@JsonProperty(value ="vin")
	private String vin;
	
	@NotNull(message = "Description is required")
	@NotBlank(message = "itemDescription cannot be blank")
	@JsonProperty(value ="description")
	private String description;

}
