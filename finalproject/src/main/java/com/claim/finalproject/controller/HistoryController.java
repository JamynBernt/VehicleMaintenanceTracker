package com.claim.finalproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.claim.finalproject.dto.HistoryRequestDto;
import com.claim.finalproject.entity.History;
import com.claim.finalproject.repository.HistoryDataAccessService;
import com.claim.finalproject.service.HistoryService;

@CrossOrigin
@RestController
public class HistoryController {
	
	private HistoryService historyService;
	
	@Autowired
	public HistoryController(HistoryService historyService) {
		super();
		this.historyService = historyService;
	}
	
	//API to create new history
	@PostMapping("/history/create")
	@ResponseBody
	public History createNewHistory(@RequestBody HistoryRequestDto historyRequestDto) {
		return historyService.createNewHistory(historyRequestDto);
	}
	
	//API to all history by vin
	@GetMapping("/history/vehicle")
	@ResponseBody
	public List<History> getAllHistoryByVin(String vin){
		return historyService.getAllHistoryByVin(vin);
	}
	
	@DeleteMapping("/history/delete/{id}")
	public String deleteHistory(@PathVariable("id") Integer id) {
		return historyService.deleteHistoryById(id);	
	}
	
	
	

}
