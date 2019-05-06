package com.revature.utils;
import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserExceptionHandler{

	
	private static final Logger log = LoggerFactory.getLogger(UserExceptionHandler.class);

	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> badRequest(Exception e) {
		Arrays.stream(e.getStackTrace()).forEach(trace -> {
			log.warn(trace.toString());
		});
		log.warn("Internal server has been caught in UserController");
		return new ResponseEntity<String>("Internal Server Error",HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
