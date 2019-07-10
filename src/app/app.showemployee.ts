import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './app.employee.service';
 @Component({
     selector: 'show-comp',
     templateUrl:'show.html'
 })
 export class showEmployeeComponent implements OnInit{
     constructor( private service:EmployeeService){}
     empA:any[];
     
     ngOnInit(): any {
         this.empA = this.service.getAllEmployee();
       // this.service.getAllEmployee((data:any)=>this.empA=data);
     }
     
 }