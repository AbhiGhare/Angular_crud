import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicCurdRoutingModule } from './basic-curd-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { TabelComponent } from './tabel/tabel.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { BasicServicesService } from './basic-services.service';

@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    TabelComponent
  ],
  imports: [
    CommonModule,
    BasicCurdRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BasicServicesService],
})
export class BasicCurdModule { }
