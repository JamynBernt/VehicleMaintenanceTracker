package com.claim.finalproject.repository;

import java.sql.PreparedStatement;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.claim.finalproject.dto.VehicleRequestDto;
import com.claim.finalproject.entity.Vehicle;

@Repository
public class VehicleDataAccessService {
	
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	public VehicleDataAccessService(JdbcTemplate jdbcTemplate) {
		super();
		this.jdbcTemplate = jdbcTemplate;
	}
	
	@Transactional
	public Vehicle createNewVehicle(VehicleRequestDto vehicleRequestDto) {
		String sql = "INSERT INTO vehicle(vehicle_identification_number, email, make, model, year) VALUES(?,?,?,?,?);";
		jdbcTemplate.update(connection -> {
			PreparedStatement ps = connection
					.prepareStatement(sql);
			ps.setString(1, vehicleRequestDto.getVin());
			ps.setString(2, vehicleRequestDto.getEmail());
			ps.setString(3, vehicleRequestDto.getMake());
			ps.setString(4, vehicleRequestDto.getModel());
			ps.setInt(5, vehicleRequestDto.getYear());
			return ps;
		});
		
		return Vehicle.builder()
				.vin(vehicleRequestDto.getVin())
				.email(vehicleRequestDto.getEmail())
				.make(vehicleRequestDto.getMake())		
				.model(vehicleRequestDto.getModel())
				.year(vehicleRequestDto.getYear())
				.build();
	}

	public Vehicle findByVin(String vin) {
		String sql = "SELECT * FROM vehicle WHERE vehicle_identification_number = ?;";
		
		Vehicle vehicle = jdbcTemplate.queryForObject(sql, mapVehicleFromDb(), vin);
		
		return vehicle;	
	}

	public List<Vehicle> getAllVehiclesForUser(String email) {
		String sql = "SELECT * FROM vehicle WHERE email = ?";
		
		List<Vehicle> vehicles = jdbcTemplate.query(sql, mapVehicleFromDb(), email);
		
		return vehicles;
	}
	
	private RowMapper<Vehicle> mapVehicleFromDb() {
		return (resultSet, i) -> {
			String vin = resultSet.getString("vehicle_identification_number");
			String email = resultSet.getString("email");
			String make = resultSet.getString("make");
			String model = resultSet.getString("model");
			Integer year = resultSet.getInt("year");
			return Vehicle.builder()
					.vin(vin)
					.email(email)
					.make(make)
					.model(model)
					.year(year)					
					.build();
		};
	}
}
