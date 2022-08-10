package com.claim.finalproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.claim.finalproject.dto.VehicleRequestDto;
import com.claim.finalproject.entity.Vehicle;
import com.claim.finalproject.service.VehicleService;

@CrossOrigin
@RestController
public class VehicleController {
	
	private VehicleService vehicleService;
	
	@Autowired
	public VehicleController(VehicleService vehicleService) {
		super();
		this.vehicleService = vehicleService;
	}
	
	//API to create new vehicle
	@PostMapping("/vehicle/create")
	@ResponseBody
	public Vehicle createNewVehicle(@RequestBody VehicleRequestDto vehicleRequestDto) {
		return vehicleService.createNewVehicle(vehicleRequestDto);
	}
	
	//API to get vehicle by VIN
	@GetMapping("/vehicle")
	@ResponseBody
	public Vehicle findByVin(@RequestParam String vin) {
		return vehicleService.findByVin(vin);
	}
	
	//API to get all vehicles by email
	@GetMapping("vehicles/user")
	@ResponseBody
	public List<Vehicle> getAllVehiclesForUser(String email){
		return vehicleService.getAllVehiclesForUser(email);
	}
	
	@PutMapping("vehicle/sell/{email}/{vin}")
	public Vehicle sellVehicle(@PathVariable("email")String email, @PathVariable("vin")String vin ) {
		return vehicleService.sellVehicle(email, vin);		
	}
	
	

}
