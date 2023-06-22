import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnePageCurdRoutingModule } from './one-page-curd-routing.module';
import { CurdComponent } from './curd/curd.component';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomService } from './services/custom.service';


@NgModule({
  declarations: [
    CurdComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    OnePageCurdRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomService],
})
export class OnePageCurdModule { }
