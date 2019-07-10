import {Component} from '@angular/core';

@Component({
    selector: 'sort-it',
    templateUrl: 'app.sortingstuff.html'
})
 export class Sortit{
     empId:number;
     empName:string;
     empSalary:number;
     empDept:string;

     emp:any=[
         {empId:1001,empName:'Rahul',empSalary:9000,empDept:'JAVA',empjoiningdate:'6/12/2014'},
     {empId:1002,empName:'Vikash',empSalary:11000,empDept:'ORAAPS',empjoiningdate:'6/12/2017'},
     {empId:1003,empName:'Uma',empSalary:12000,empDept:'JAVA',empjoiningdate:'6/12/2010'},
     {empId:1004,empName:'Sachin',empSalary:11500,empDept:'ORAAPS',empjoiningdate:'11/12/2017'},
     {empId:1005,empName:'Amol',empSalary:7000,empDept:'.NET',empjoiningdate:'1/1/2018'},
     {empId:1006,empName:'Vishal',empSalary:17000,empDept:'BI',empjoiningdate:'9/12/2012'}
     
];
 sortid(): any{
     this.emp=this.emp.sort((a,b)=>a.empId-b.empId);
 }
 sortsalary(): any{
    this.emp=this.emp.sort((a,b)=>a.empSalary-b.empSalary);
}
sortname(): any{
    this.emp=this.emp.sort((a,b)=>a.empName.localeCompare(b.empName));
}
sortdept(): any{
    this.emp=this.emp.sort((a,b)=>a.empDept.localeCompare(b.empDept));
}


}

