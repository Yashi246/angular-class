import {Component,  OnInit} from '@angular/core';
import {EmployeeService} from './app.employee.service';
 @Component({
     selector: 'add-comp',
     templateUrl:'add.html'
 })
 export class addEmployeeComponent implements OnInit{
    
     emp:any[];
     constructor(private service:EmployeeService){}
     ngOnInit(): any {
        

        this.service.addDataEmployee().
    }
     
   
 }}