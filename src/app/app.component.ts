import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeserviceService } from './service/employeeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public employee: Employee[] = [];
  public editEmployee: any;
  public employeeid: any;


  constructor(private employeeService:EmployeeserviceService){

  }
  ngOnInit(): void {
    this.getallListEmploy();
  }

  public getallListEmploy():void{
    this.employeeService.getlistemployee().subscribe(
      (res:Employee[]) =>{
      this.employee = res;
    },(error:HttpErrorResponse)=>{
      alert (error.message);
      
      }
    
    );
  }

public addEmployee(addEmploy:NgForm):void{
  document.getElementById('addemployee')?.click();
  this.employeeService.addemployee(addEmploy.value).subscribe(
    (res:Employee)=>{
      this.getallListEmploy();
      addEmploy.reset();
    },
    (error:HttpErrorResponse)=>{
      alert(error.message)
      addEmploy.reset();
    }
  );

}

public editEployee(editEmloy :Employee):void{
  this.employeeService.updateemployee(editEmloy).subscribe(
    (res:Employee)=>{
      this.getallListEmploy();
  },
  (error:HttpErrorResponse)=>{
    alert(error.message);
  }
  );
} 

public deleteEmployee(deleteEmp: number):void{
  this.employeeService.deleteemployee(deleteEmp).subscribe(
    (res:void)=>{
      this.getallListEmploy();
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
    );
}
//search future
public search (key:string):void{
  let result: Employee []=[];
  for(let e of this.employee){
    if(e.name.toLowerCase().indexOf(key.toLowerCase())!==-1
    ||e.email.toLowerCase().indexOf(key.toLowerCase())!==-1
    ||e.jobTitle.toLowerCase().indexOf(key.toLowerCase())!==-1
    ||e.phone.toLowerCase().indexOf(key.toLowerCase())!==-1){
      result.push(e);
    }
  }
  this.employee = result;
  if(result.length ===0|| !key){
    this.getallListEmploy();
  }
}
  
  public onOpenModal(employee: Employee|null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addnew');
    }
    if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#editEmploy');
    }
    if (mode === 'delete') {
      this.employeeid = employee;
      button.setAttribute('data-target', '#deleteEmploy');
    }
    container?.appendChild(button);
    button.click();
  }
    
}
