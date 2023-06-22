import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class BasicServicesService {

  readonly url='http://localhost:3000/';

  patchData!:any

  constructor(private http: HttpClient) { }

  addUserInfo(data:any):Observable<any>{
    return this.http.post<any>(this.url+'userList',data);
  }

  getUserInfo():Observable<any>{
    return this.http.get<any>(this.url+'userList');
  }

  deleteUserInfo(id:any):Observable<any>{
    return this.http.delete<any>(this.url+'userList/'+id);
  }

  updateUserInfo(id:any):Observable<any>{
    return this.http.get<any>(this.url+'userList/'+id)
  }

  updateNewData(data:any):Observable<any>{
    return this.http.put<any>(this.url+'userList/'+data.id,data)

  }

  addUpadate(data:any,type:any):Observable<any>{
    if(type=='Add'){
      return this.http.post<any>(this.url+'userList',data);

    }else{
      return this.http.put<any>(this.url+'userList/'+data.id,data)
    }
  }

  setPatchData(data:any){
    this.patchData=data
  }

  getPatchData(){
    return this.patchData
  }

}
