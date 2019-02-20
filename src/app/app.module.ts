import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import {GetDataService} from './get-data.service';
import { FormsModule } from '@angular/forms';
import 'ag-grid-enterprise';

@NgModule({
  declarations: [AppComponent],
  imports: [FormsModule,BrowserModule, HttpModule,HttpClientModule, AgGridModule.withComponents([])],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}