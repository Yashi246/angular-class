import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})

export class EmployeeService{
    constructor(private http:HttpClient)
    {}

    entered:number;
    emp:any[]=[{
        "empId" :1001,
        "empName" :"Abcd",
        "empSalary" :8881.11,
        "empDepartment": "java"
    },
    {
        "empId" :1002,
        "empName" :"Bcd",
        "empSalary" :8341.11,
        "empDepartment": "java"
    },
    {
        "empId" :1007,
        "empName" :"Cd",
        "empSalary" :8761.11,
        "empDepartment": "java"
    }];
    empA:any[];
   
    getAllEmployee(){
      // this.http.get("assets/employee.json");//you can add link too
     //  return this.http.get("assets/employee.json");
    return this.emp;
    }
   
    addEmployee(data:any){
        this.emp.push(data);
        return true;
    }
    

}

