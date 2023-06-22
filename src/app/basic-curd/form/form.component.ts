import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BasicServicesService } from '../basic-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  constructor(private fb :FormBuilder, private service: BasicServicesService, private router:Router){}

  data:any
  ngOnInit(): void {
    this.getvalue();
  }



  userInfo=this.fb.group({
    name:this.fb.control(''),
    email:this.fb.control(''),
    number:this.fb.control(''),
    age:this.fb.control(''),
    id:this.fb.control(null)
  })



  submit(){
    console.log(this.userInfo.value);
    // var type = this.userInfo.value.id==null?'Add':'Update'
    if(this.userInfo.value.id==null){
      this.service.addUserInfo(this.userInfo.value).subscribe(data=>{
          alert('data added')
          console.log(data);
          this.router.navigate(['/basic-curd/table'])
          this.userInfo.reset()
          
        })
    }else{
      this.service.updateNewData(this.userInfo.value).subscribe(item=>{
        console.log(item);
      location.reload()

        alert('data updated')
        this.router.navigate(['/basic-curd/table'])
        this.userInfo.reset()
      })
      // location.reload()

    }

    // this.service.addUserInfo(this.userInfo.value).subscribe(data=>{
    //   alert('data added')
    //   console.log(data);
    //   this.router.navigate(['/basic-curd/table'])
    //   this.userInfo.reset()
      
    // })


    // this.service.addUpadate(this.userInfo.value,type).subscribe(data=>{
    //   if(type=='Add'){
    //     alert('data added')
    //   }else{
    //     alert('data updated')
    //     location.reload()
    //   }
    // // this.getvalue();

    // })
    // this.userInfo.reset()
    this.getvalue();
    this.router.navigate(['/basic-curd/table'])
  }

  getvalue(){
    this.data=this.service.getPatchData()
    console.log(this.data);
    
    this.userInfo.setValue({
      name: this.data.name,
      email: this.data.email,
      number: this.data.number,
      age: this.data.age,
      id:this.data.id
    })
    
    }
}
