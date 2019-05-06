package com.revature.utils;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;
@Component
public class ResponseMap {
	
	public ResponseMap() {
		super();
	}
	
	public static Map<String, Object> getGoodResponse(Object pResult) {
		Map<String, Object> tMap = new HashMap<>();
		tMap.put("result", pResult);
		tMap.put("message", "Success");
		return tMap;
	}
	
	public static  Map<String, Object> getGoodResponse(Object pResult, String pMessage) {
		Map<String, Object> tMap = new HashMap<>();
		tMap.put("result", pResult);
		tMap.put("message", pMessage);
		return tMap;
	}
	
	public static Map<String, Object> getBadResponse() {
		Map<String, Object> tMap = new HashMap<>();
		tMap.put("message", "Invalid Request");
		return tMap;
	}
	
	
	public static Map<String, Object> getBadResponse(String pMessage) {
		Map<String, Object> tMap = new HashMap<>();
		tMap.put("result", null);
		tMap.put("message", pMessage);
		return tMap;
	}
	
	
	/**
	 * Create a new map object
	 * @param tName
	 * @param pObject
	 * @return Map<String, Object>
	 */
	public static Map<String, Object> getNewMap(String tName, Object pObject) {
		Map<String, Object> tMap = new HashMap<>();
		tMap.put(tName, pObject);
		return tMap;
	}
	
	}