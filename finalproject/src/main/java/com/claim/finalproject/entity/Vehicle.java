package com.claim.finalproject.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Vehicle {
	
	private String vin;
	private String email;
	private String make;
	private String model;
	private Integer year;
}
