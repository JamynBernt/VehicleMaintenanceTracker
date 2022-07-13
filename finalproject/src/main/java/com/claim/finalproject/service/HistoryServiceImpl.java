package com.claim.finalproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.claim.finalproject.dto.HistoryRequestDto;
import com.claim.finalproject.entity.History;
import com.claim.finalproject.repository.HistoryDataAccessService;

@Service
public class HistoryServiceImpl implements HistoryService{

	private HistoryDataAccessService historyDataAccessService;

	@Autowired
	public HistoryServiceImpl(HistoryDataAccessService historyDataAccessService) {
		super();
		this.historyDataAccessService = historyDataAccessService;
	}
	
	@Override
	public History createNewHistory(HistoryRequestDto historyRequestDto) {
		return historyDataAccessService.createNewVehicle(historyRequestDto);
	}

	@Override
	public List<History> getAllHistoryByVin(String vin) {
		return historyDataAccessService.getAllHistoryByVin(vin);
	}

}
