import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'basic-curd',
    loadChildren:()=>import('./basic-curd/basic-curd.module').then(m=>m.BasicCurdModule)
  },
  {
    path:'one-page-curd',
    loadChildren:()=>import('./one-page-curd/one-page-curd.module').then(m=>m.OnePageCurdModule)
  },
  {
    path:'MEAN',
    loadChildren:()=>import('./maen/maen.module').then(m=>m.MAENModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
