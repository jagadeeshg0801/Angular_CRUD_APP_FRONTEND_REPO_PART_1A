import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  constructor(private empService: EmployeeService,private router: Router,  private route: ActivatedRoute ){
    const id = this.route.snapshot.params['id'];
    if(id &&  id != 'new'){
      this.getEmployeeDetails(id);
    }

  }
  employee: Employee = new Employee();


  getEmployeeDetails(id:any){
    this.empService.getEmployeeDetailsById(id).subscribe(res =>{
      if(res){
        const emp = new Employee();
        this.employee = {...emp, ...res}
      }
    })
  }
  onSave(){
    if(this.employee.id){
      this.empService.updateEmployeeDetails(this.employee).subscribe((res:any) => {
        if(res && res.id){
          this.router.navigate(['']);
          this.employee = new Employee();
        }
      })
      return;
    }
    this.empService.addEmployee(this.employee).subscribe((res:any) => {
      if(res && res.id){
        this.router.navigate(['']);
        this.employee = new Employee();
      }
    })
  }
}
