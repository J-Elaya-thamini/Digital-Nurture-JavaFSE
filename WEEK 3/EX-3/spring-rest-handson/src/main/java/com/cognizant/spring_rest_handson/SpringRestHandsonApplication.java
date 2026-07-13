package com.cognizant.spring_rest_handson;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;
@ImportResource("classpath:employee.xml")
@SpringBootApplication
public class SpringRestHandsonApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringRestHandsonApplication.class, args);
	}

}
