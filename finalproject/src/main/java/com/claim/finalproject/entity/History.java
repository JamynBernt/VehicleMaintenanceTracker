package com.claim.finalproject.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class History {
	
	private Integer historyNumber;
	private String vin;
	private String description;
	
}
