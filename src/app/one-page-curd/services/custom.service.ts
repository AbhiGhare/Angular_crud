import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

   url='http://localhost:3000/userData'
  constructor(public http : HttpClient) { }

  // post
  PostData(data:any):Observable<any>{
    return this.http.post<any>(this.url,data)
  }

  //get
  GetData():Observable<any>{
    return this.http.get<any>(this.url)
  }

  //delete
  DeleteData(id:any):Observable<any>{
    return this.http.delete<any>(this.url+'/'+id)
  }

  //get id
  GetId(id:any):Observable<any>{
    return this.http.get<any>(this.url+'/'+id)
  }

  //update
  UpdateData(data:any):Observable<any>{
    return this.http.put<any>(this.url+'/'+data.id,data)
  }
}
