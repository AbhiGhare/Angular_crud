import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAENRoutingModule } from './maen-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeanServicesService } from './mean-services.service';
import { HttpClientModule } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { UpdateFormComponent } from './update-form/update-form.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    TableComponent,
    UpdateFormComponent
  ],
  imports: [
    CommonModule,
    MAENRoutingModule,
    HttpClientModule,
    ObserversModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers:[MeanServicesService]
})
export class MAENModule { }
