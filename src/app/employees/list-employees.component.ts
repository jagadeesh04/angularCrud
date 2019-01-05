import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  
  employees: Employee[];
  employeeToDisplay: Employee;
  private arrIndex = 1;
  constructor(private _employeeService: EmployeeService){}



  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.employeeToDisplay = this.employees[0];
  }

  nextEmployee(): void {
    if(this.arrIndex<=2){
      this.employeeToDisplay = this.employees[this.arrIndex];
      this.arrIndex++;
    } else {
      this.employeeToDisplay = this.employees[0];
      this.arrIndex=1;
    }
  }

}
