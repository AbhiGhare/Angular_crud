import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurdComponent } from './curd/curd.component';

const routes: Routes = [
  {
    path:'',
    component:CurdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnePageCurdRoutingModule { }
