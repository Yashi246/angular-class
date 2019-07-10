import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {Routes,RouterModule} from '@angular/router';
import { addemployeeComponent} from './app.addemployee';
import {showEmployeeComponent} from'./app.showemployee';
import {searchEmployeeComponent} from './app.searcheemployee';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
const routes:Routes=[
    {path:'add' ,component:addemployeeComponent},
    {path:'show' ,component:showEmployeeComponent},
    {path:'search' ,component:searchEmployeeComponent}


];
@NgModule({ //decorator
    imports: [
        BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule
    
        
    ],
    declarations: [
        AppComponent, addemployeeComponent,showEmployeeComponent,searchEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }