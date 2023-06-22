import { NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';

const MaterialComponent=[
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatRadioModule,
   MatDatepickerModule, MatNativeDateModule,MatMenuModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatTabsModule
]

@NgModule({
  declarations: [],
  imports: [
    MaterialComponent,
    
  ],
  exports:[
    MaterialComponent
  ]
})
export class MaterialModule { }
