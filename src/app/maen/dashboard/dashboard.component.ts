import { Component, OnInit } from '@angular/core';
import { MeanServicesService } from '../mean-services.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:MeanServicesService, private fb:FormBuilder){}

  user=this.fb.group({
        name: this.fb.control(''), 
        surname: this.fb.control(''), 
        age: this.fb.control(''), 
        email: this.fb.control(''), 
        phone_number: this.fb.control(''), 
        DOB: this.fb.control(''), 
        city: this.fb.control(''), 
    _id:this.fb.control(null),

       
  })
  ngOnInit(): void {
    this.get()
  }

  post (){
    console.log(this.user.value);
    this.service.postData(this.user.value).subscribe(item=>{
      console.log(item);
      
    })
    
  }

  get(){
    this.service.getData().subscribe(data=>{
      console.log("Data", data);
    })
  }
  f1:boolean=true;
  f2:boolean=false;
  f3:boolean=false;
  f4:boolean=false;
  f5:boolean=false;
  f6:boolean=false;
  f7:boolean=false;
  f8:boolean=false;


  fun1(){
    this.f1=false;
    this.f2=true
    
  }
}
