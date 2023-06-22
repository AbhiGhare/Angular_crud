import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MeanServicesService } from '../mean-services.service';
import { FormBuilder } from '@angular/forms';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  // @ViewChild(TableComponent)update!:TableComponent

  value!:any;

  constructor(private dialogRef:MatDialogRef<UpdateFormComponent>,private service : MeanServicesService,private fb : FormBuilder){
    
  }

  user=this.fb.group({
    name: this.fb.control(''), 
    surname: this.fb.control(''), 
    age: this.fb.control(''), 
    email: this.fb.control(''), 
    phone_number: this.fb.control(''), 
    DOB: this.fb.control(''), 
    city: this.fb.control(''), 
  _id:this.fb.control(''),
  
   
  })

  ngOnInit() {
    
  alert('edit data ?')
  this.getdata()
  }

  getdata(){
   
    this.value = this.service.IdDataPost();
    console.log(this.value);

    this.user.setValue({
      name: this.value.name,
      surname: this.value.surname,
      age: this.value.age,
      email: this.value.email,
      phone_number:this.value.phone_number,
      DOB: this.value.DOB,
      city: this.value.city,
      _id:this.value._id,
    })

  }

  submit(){
    console.log(this.user.value);
    
    this.service.updateData(this.user.value).subscribe(item=>{
      console.log(item);
      // this.user.reset()
      // alert('success')
      // location.reload()
      this.dialogRef.close(true)

    })
    // this.update.getInfo()
    this.dialogRef.close(true)

  }
}
