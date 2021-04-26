package goya.fashion.vegetable.service;

import goya.fashion.vegetable.Repo.EmployeeRepo;
import goya.fashion.vegetable.exception.UserNotFoundException;
import goya.fashion.vegetable.model.Employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {

    public final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService (EmployeeRepo employeeRepo ){
        this.employeeRepo =employeeRepo;
    }


    public Employee addEmployee (Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public List<Employee> getAllEmployee(){
        List<Employee> listEmployee = employeeRepo.findAll();
        return  listEmployee;
    }

    public Employee updateEmployee (Employee employee){
        return employeeRepo.save(employee);
    }

    public void deleteEmployeeById(Long id){
         employeeRepo.deleteEmployeeById(id);
    }

    public Employee findById(Long id) {
        return employeeRepo.findEmployeeById(id).orElseThrow(() -> new UserNotFoundException("User by id" +id+ "was not found "));
    }
}
