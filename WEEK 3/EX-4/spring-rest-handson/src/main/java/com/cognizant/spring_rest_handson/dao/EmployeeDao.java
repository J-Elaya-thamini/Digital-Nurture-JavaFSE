package com.cognizant.spring_rest_handson.dao;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Repository;

import com.cognizant.spring_rest_handson.exception.EmployeeNotFoundException;
import com.cognizant.spring_rest_handson.model.Employee;

@Repository
public class EmployeeDao {

    private static ArrayList<Employee> EMPLOYEE_LIST;

    @Autowired
    public EmployeeDao(ApplicationContext context) {
        EMPLOYEE_LIST = (ArrayList<Employee>) context.getBean("employeeList");
    }

    public ArrayList<Employee> getAllEmployees() {
        return EMPLOYEE_LIST;
    }
    
    public void updateEmployee(Employee employee) throws EmployeeNotFoundException {

        for (int i = 0; i < EMPLOYEE_LIST.size(); i++) {

            if (EMPLOYEE_LIST.get(i).getId().equals(employee.getId())) {
                EMPLOYEE_LIST.set(i, employee);
                return;
            }
        }

        throw new EmployeeNotFoundException("Employee with ID "
                + employee.getId() + " not found");
    }
    public void deleteEmployee(Integer id) throws EmployeeNotFoundException {

        for (int i = 0; i < EMPLOYEE_LIST.size(); i++) {
            if (EMPLOYEE_LIST.get(i).getId().equals(id)) {
                EMPLOYEE_LIST.remove(i);
                return;
            }
        }

        throw new EmployeeNotFoundException("Employee with ID " + id + " not found");
    }
}
