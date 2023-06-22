import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UpdateFormComponent } from './update-form/update-form.component';

@Injectable({
  providedIn: 'root'
})
export class MeanServicesService {

  url='http://localhost:5000'
  storage!: any;
  constructor(private http: HttpClient,private dialog:MatDialog) { }

  getData():Observable<any>{
    return this.http.get<any>(this.url+'/list')
  }

  postData(data:any){
    return this.http.post<any>(this.url+'/create',data)
  }

  deleteData(_id:any):Observable<any>{
    return this.http.delete<any>(this.url+'/delete/'+_id)
  }

  // single get id
  singleGetid(data:any):Observable<any>{
    return this.http.get<any>(this.url+'/'+data);
  }

  // get data
  IdData(data:any){
    this.storage=data
  }

  IdDataPost(){
    return this.storage
  }

  updateData(data:any):Observable<any>{
    return this.http.put(this.url+'/update/'+data._id,data)
  }
 
}
