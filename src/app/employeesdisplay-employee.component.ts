import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-employeesdisplay-employee',
  templateUrl: './employeesdisplay-employee.component.html',
  styleUrls: ['./employeesdisplay-employee.component.css']
})
export class EmployeesdisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  handleClickFromChild(){
    this.notify.emit(this.employee.name);
  }

}
