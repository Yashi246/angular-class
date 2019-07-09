import {Component, OnInit,Input} from "@angular/core";
import {EmployeeService} from './app.employee.service';

@Component({
    selector: 'show-emp',
    templateUrl:'app.show.html'
})
export class ShowemployeeComponent implements OnInit{
constructor(private service:EmployeeService){}
@Input()

empA:any[];
ngOnInit(){
this.service.getAllEmployee().subscribe((data:any)=>this.empA=data);
}
deleteemployee(i:number){
    alert("delete?");
    this.empA.splice(i,1);
    alert("deteted");
}
}