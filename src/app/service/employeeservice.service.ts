import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) {

   }

   getlistemployee():Observable<Employee[]>{
     return this.http.get<Employee[]>('http://localhost:8080/api/employee');
   }

   getemployeebyid (id : number):Observable<void>{
     return this.http.get<void>('http://localhost:8080/api/employee/'+id);
   }

   addemployee (employee : Employee):Observable<Employee>{
    return this.http.post<Employee>('http://localhost:8080/api/employee',employee);
  }

   updateemployee (employee : Employee):Observable<Employee>{
    return this.http.put<Employee>('http://localhost:8080/api/employee',employee);
  }

  deleteemployee (id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8080/api/employee/'+id);
  }
}
