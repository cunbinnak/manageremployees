package goya.fashion.vegetable;

import goya.fashion.vegetable.model.Employee;
import goya.fashion.vegetable.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/api")
public class EmployeeResource {

    public  final EmployeeService employeeService;


    public EmployeeResource(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping(value = "/employee")
    public ResponseEntity<List<Employee>> getListEmployee (){
       List<Employee> ListEmploy = employeeService.getAllEmployee();
       return  new ResponseEntity<>(ListEmploy, HttpStatus.OK);
    }

    @GetMapping(value = "/employee/{id}")
    public ResponseEntity<Employee> findById (@PathVariable ("id") Long id){
        Employee employee = employeeService.findById(id);
        return  new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping(value = "/employee")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
        Employee addEmploy = employeeService.addEmployee(employee);
        return  new ResponseEntity<>(addEmploy, HttpStatus.OK);
    }

    @PutMapping(value = "/employee")
    public  ResponseEntity<Employee> editEmploy (@RequestBody Employee employee){
        Employee editEmploy = employeeService.addEmployee(employee);
        return new ResponseEntity<>(editEmploy, HttpStatus.OK);
    }

    @DeleteMapping(value = "/employee/{id}")
    public ResponseEntity<?> deleteEmploy (@PathVariable ("id") Long id){
        employeeService.deleteEmployeeById(id);
        return new ResponseEntity<>( HttpStatus.OK);
    }
}
