package com.claim.finalproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.claim.finalproject.dto.VehicleRequestDto;
import com.claim.finalproject.entity.Vehicle;
import com.claim.finalproject.repository.VehicleDataAccessService;

@Service
public class VehicleServiceImpl implements VehicleService{
	
	private VehicleDataAccessService vehicleDataAccessService;
	
	@Autowired
	public VehicleServiceImpl(VehicleDataAccessService vehicleDataAccessService) {
		super();
		this.vehicleDataAccessService = vehicleDataAccessService;
	}

	@Override
	public Vehicle createNewVehicle(VehicleRequestDto vehicleRequestDto) {
		// TODO Auto-generated method stub
		return vehicleDataAccessService.createNewVehicle(vehicleRequestDto);
	}

	@Override
	public Vehicle findByVin(String vin) {
		// TODO Auto-generated method stub
		return vehicleDataAccessService.findByVin(vin);
	}

	@Override
	public List<Vehicle> getAllVehiclesForUser(String email) {
		// TODO Auto-generated method stub
		return vehicleDataAccessService.getAllVehiclesForUser(email);
	}

	@Override
	public Vehicle sellVehicle(String email, String vin) {
		// TODO Auto-generated method stub
		return vehicleDataAccessService.sellVehicle(email, vin);
	}
	

}
