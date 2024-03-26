import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit{
  constructor(private empService: EmployeeService, private router: Router){}
  empList:Employee[]= [];

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.empService.getEmployeesList().subscribe((res:any) =>{
      this.empList = res ||[];
    })
  }

  deleteEmployee(emp:Employee){
    this.empService.deleteEmployee(emp.id).subscribe((res:any)=>{
      if(res && res.deleted == true){
        this.getEmployees();
      }
    })
  }
  editEmployee(emp:Employee){
    this.router.navigate(['add-emp', emp.id])
  }
}
