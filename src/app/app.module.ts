import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleMaterialModule } from '../material-module';
import { TableBasicExample } from '../table-basic/table-basic-example.component';
import {UserTableComponent} from '../user-table/user-table.component';
import { from } from 'rxjs/observable/from';

@NgModule({
  imports: [
    BrowserModule,
    ExampleMaterialModule
  ],
  declarations: [
    AppComponent, 
    TableBasicExample, 
    UserTableComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }