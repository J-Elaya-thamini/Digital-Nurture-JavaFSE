package com.cognizant.spring_security_handson.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.spring_security_handson.model.Country;

@RestController
public class CountryController {

    @GetMapping("/countries")
    public List<Country> getCountries() {

        List<Country> countries = new ArrayList<>();

        countries.add(new Country("US", "United States"));
        countries.add(new Country("DE", "Germany"));
        countries.add(new Country("IN", "India"));
        countries.add(new Country("JP", "Japan"));

        return countries;
    }
}