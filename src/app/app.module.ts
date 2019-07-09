import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {Sortit}   from './app.sorting';

@NgModule({ //decorator
    imports: [
        BrowserModule
        
    ],
    declarations: [
        AppComponent, Sortit
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }