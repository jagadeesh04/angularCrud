import { Component, OnInit, Input } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-employeesdisplay-employee',
  templateUrl: './employeesdisplay-employee.component.html',
  styleUrls: ['./employeesdisplay-employee.component.css']
})
export class EmployeesdisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  constructor() { }

  ngOnInit() {
  }

}
