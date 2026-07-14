package com.cognizant.spring_rest_handson.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.spring_rest_handson.model.Country;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @PostMapping
    public Country addCountry(@RequestBody @Valid Country country) {

        System.out.println("Start");
        System.out.println(country.getCode());
        System.out.println(country.getName());

        return country;
    }
}