package com.cognizant.spring_rest_handson.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.spring_rest_handson.model.Employee;
import com.cognizant.spring_rest_handson.service.EmployeeService;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import jakarta.validation.Valid;

import com.cognizant.spring_rest_handson.exception.EmployeeNotFoundException;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employees")
    public ArrayList<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }
    @PutMapping("/employees")
    public void updateEmployee(@RequestBody @Valid Employee employee)
            throws EmployeeNotFoundException {

        employeeService.updateEmployee(employee);
    }
    @DeleteMapping("/employees/{id}")
    public void deleteEmployee(@PathVariable Integer id)
            throws EmployeeNotFoundException {

        employeeService.deleteEmployee(id);
    }
}