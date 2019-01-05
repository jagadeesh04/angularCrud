import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-employeesdisplay-employee',
  templateUrl: './employeesdisplay-employee.component.html',
  styleUrls: ['./employeesdisplay-employee.component.css']
})
export class EmployeesdisplayEmployeeComponent implements OnInit, OnChanges {
  @Input() employee: Employee;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    const previousEmployee = <Employee> changes.employee.previousValue;
    const currentEmployee = <Employee> changes.employee.currentValue;

    console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL'));

    console.log('Current : ' + currentEmployee.name);
  }
}
