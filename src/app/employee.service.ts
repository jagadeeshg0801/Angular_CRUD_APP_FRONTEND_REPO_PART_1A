import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   BASE_URL:string = "http://localhost:8081/api/v1"
  constructor( private http: HttpClient) { }

  //addEmployee
  addEmployee(emp:Employee){
    return this.http.post(this.BASE_URL+'/add-emp', emp);
  }
  getEmployeesList(){
    return this.http.get(this.BASE_URL+'/employees');
  }

  getEmployeeDetailsById(id:any){
    return this.http.get(this.BASE_URL+'/employee/'+id);
  }

  updateEmployeeDetails(emp:Employee){
    return this.http.put(this.BASE_URL+'/update-emp/'+emp.id, emp)
  }

  deleteEmployee(empId:any){
    return this.http.delete(this.BASE_URL +'/delete-emp/'+empId)
  }
}
