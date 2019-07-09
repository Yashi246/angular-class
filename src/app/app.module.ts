import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddEmployeeComponent} from './addemp';
import {HttpClientModule} from '@angular/common/http';
import {ShowemployeeComponent} from './showemp'
@NgModule({ //decorator
    imports: [
        BrowserModule, HttpClientModule
        
    ],
    declarations: [
        AppComponent, AddEmployeeComponent, ShowemployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }