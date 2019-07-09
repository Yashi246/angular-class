import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
    providedIn: 'root'

})
export class EmployeeService{
    constructor(private http:HttpClient){}
    getAllEmployee(){
        //this.http.get("assets/employee.json");//you can add link too
       return this.http.get("assets/employee.json");

    }

}