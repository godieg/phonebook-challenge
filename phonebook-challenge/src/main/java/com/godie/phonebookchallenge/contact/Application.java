package com.godie.phonebookchallenge.contact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.godie.phonebookchallenge.contact")
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
