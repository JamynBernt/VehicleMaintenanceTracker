package com.claim.finalproject.service;


import java.util.List;

import com.claim.finalproject.dto.HistoryRequestDto;
import com.claim.finalproject.entity.History;

public interface HistoryService {

	History createNewHistory(HistoryRequestDto historyRequestDto);

	List<History> getAllHistoryByVin(String vin);

	String deleteHistoryById(Integer id);

}
