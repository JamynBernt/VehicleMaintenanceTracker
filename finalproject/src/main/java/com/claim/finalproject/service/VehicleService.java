package com.claim.finalproject.service;

import java.util.List;

import com.claim.finalproject.dto.VehicleRequestDto;
import com.claim.finalproject.entity.Vehicle;

public interface VehicleService {

	Vehicle createNewVehicle(VehicleRequestDto vehicleRequestDto);

	Vehicle findByVin(String vin);

	List<Vehicle> getAllVehiclesForUser(String email);

	Vehicle sellVehicle(String email, String vin);

}
