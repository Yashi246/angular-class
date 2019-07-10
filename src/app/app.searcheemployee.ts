import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from './app.employee.service';
 @Component({
     selector: 'search-comp',
     templateUrl:'search.html'
 })
 export class searchEmployeeComponent{
    constructor(private service:EmployeeService, private router:Router){}
    myallData1:any[]=[];
    empId:string;
    empSalary:number;
    empDepartment:string;
    empName:string;
    enteredId:number;
    searchlist:any[];
   ngOnInit(){
       this.myallData1=this.service.getAllEmployee();
   }
    
    searchData(id){
        this.enteredId = parseInt(id);
        this.searchlist = this.myallData1.filter(o=>o.empId===this.enteredId);

        
    }
     
 }