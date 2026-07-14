package com.cognizant.spring_rest_handson.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.spring_rest_handson.dao.DepartmentDao;
import com.cognizant.spring_rest_handson.model.Department;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentDao departmentDao;

    @Transactional
    public ArrayList<Department> getAllDepartments() {
        return departmentDao.getAllDepartments();
    }
}
