package com.claim.finalproject.repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.claim.finalproject.dto.HistoryRequestDto;
import com.claim.finalproject.entity.History;

@Repository
public class HistoryDataAccessService {
	
	private JdbcTemplate jdbcTemplate;

	@Autowired
	public HistoryDataAccessService(JdbcTemplate jdbcTemplate) {
		super();
		this.jdbcTemplate = jdbcTemplate;
	}
	
	@Transactional
	public History createNewVehicle(HistoryRequestDto historyRequestDto) {
		Integer newHistoryNumber = null;
		KeyHolder keyHolder = new GeneratedKeyHolder();
		String sql = "INSERT INTO history(vehicle_identification_number, description) VALUES(?,?);";
		jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection
                    .prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, historyRequestDto.getVin());
            ps.setString(2, historyRequestDto.getDescription());
            return ps;
        }, keyHolder);
		
		newHistoryNumber = keyHolder.getKey().intValue();
        
        return History.builder()
        		.historyNumber(newHistoryNumber)
        		.vin(historyRequestDto.getVin())
        		.description(historyRequestDto.getDescription())
        		.build();
	}

	public List<History> getAllHistoryByVin(String vin) {
		String sql = "SELECT * FROM history WHERE vehicle_identification_number = ?";
		
		List<History> histories = jdbcTemplate.query(sql, mapHistoryFromDb(), vin);
		return histories;
	}
	
	private RowMapper<History> mapHistoryFromDb() {
		return (resultSet, i) -> {
			Integer historyNumber = resultSet.getInt("history_number");
			String vin = resultSet.getString("vehicle_identification_number");
			String description = resultSet.getString("description");
			return History.builder()
					.historyNumber(historyNumber)
					.vin(vin)
					.description(description)
					.build();
		};
	}

}
