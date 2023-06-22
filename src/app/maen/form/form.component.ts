import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MeanServicesService } from '../mean-services.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  

  title:string='user name'

input1:boolean=true;
input2:boolean=false;
input3:boolean=false;
input4:boolean=false;
input5:boolean=false;
input6:boolean=false;
input7:boolean=false;
input8:boolean=false;


constructor(private fb:FormBuilder,private service:MeanServicesService ) {}


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

}

fun1(){
  // alert('hi')
  this.title='surname'
  this.input2 = true ;

  this.input1 = false ;
}
fun2(){
  this.title='age';
  this.input3=true;
  this.input2=false
}
fun3(){
  this.title='email';
  this.input4=true;
  this.input3=false
}
fun4(){
  this.title='phone number';
  this.input5=true;
  this.input4=false
}
fun5(){
  this.title='Date of Birth';
  this.input6=true;
  this.input5=false
}
fun6(){
  this.title='city';
  this.input7=true;
  this.input6=false
}
fun7(){
  this.title='';
  this.input8=true;
  this.input7=false
  // this.post()
}

post (){
  console.log(this.user.value);
  this.service.postData(this.user.value).subscribe(item=>{
  console.log(item);
  this.user.reset();
  location.reload()
  this.title='user name'
  this.input8=false
  this.input1=true
  })
  
}

}
