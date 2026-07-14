package com.cognizant.spring_rest_handson.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.spring_rest_handson.dao.EmployeeDao;
import com.cognizant.spring_rest_handson.exception.EmployeeNotFoundException;
import com.cognizant.spring_rest_handson.model.Employee;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeDao employeeDao;

    @Transactional
    public ArrayList<Employee> getAllEmployees() {
        return employeeDao.getAllEmployees();
    }
    @Transactional
    public void updateEmployee(Employee employee)
            throws EmployeeNotFoundException {

        employeeDao.updateEmployee(employee);
    }
    @Transactional
    public void deleteEmployee(Integer id) throws EmployeeNotFoundException {
        employeeDao.deleteEmployee(id);
    }
    
}