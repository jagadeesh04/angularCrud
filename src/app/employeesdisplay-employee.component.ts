import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-employeesdisplay-employee',
  templateUrl: './employeesdisplay-employee.component.html',
  styleUrls: ['./employeesdisplay-employee.component.css']
})
export class EmployeesdisplayEmployeeComponent implements OnInit {
  private _employee: Employee;

  @Input() 
  set employee(val: Employee){
    this._employee = val;
  }

  get employee(): Employee{
    return this._employee;
  }

  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges){
  //   const previousEmployee = <Employee> changes.employee.previousValue;
  //   const currentEmployee = <Employee> changes.employee.currentValue;

  //   console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL'));

  //   console.log('Current : ' + currentEmployee.name);
  // }
}
