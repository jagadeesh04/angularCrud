import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../models/employee.model'

@Pipe({
    name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
    transform(employees: Employee[], searchTerm:string){
        if(!employees || !searchTerm) {
            return employees;
        }

        return employees.filter(e => e.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}