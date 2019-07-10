import {Component} from '@angular/core';
import {EmployeeService} from './app.employee.service';
import {Router} from '@angular/router';

@Component({
    selector: 'add-emp',
    templateUrl: 'add.html'
})
export class addemployeeComponent{
    constructor(private service:EmployeeService, private router:Router){}
    myallData:any;
    empId:string;
    empSalary:number;
    empDepartment:string;
    empName:string;

    addData(){
        this.myallData={empId:this.empId, empName:this.empName, empSalary:this.empSalary, empDepartment:this.empDepartment};
        if(this.service.addEmployee(this.myallData)){
        this.router.navigate(['show']);

         }
        alert("hello")
    }
}