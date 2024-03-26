import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeesListComponent } from "./employees-list/employees-list.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";

const routes:Routes =[
  {path: 'emp-list', component:EmployeesListComponent},
  {path: 'add-emp/:id', component: AddEmployeeComponent},
  {path: 'emp-details', component: EmployeeDetailsComponent},
  {path: '', redirectTo: 'emp-list', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
