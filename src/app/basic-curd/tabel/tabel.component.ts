import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicServicesService } from '../basic-services.service';
import { FormComponent } from '../form/form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent implements OnInit {
  @ViewChild(FormComponent)FormComponent!:FormComponent
  

  userList:any;

  constructor(private services:BasicServicesService,private router:Router){

  }



  ngOnInit(): void {
    this.getUserList()
    // location.reload()
    // this.userList.reset();
  }

  getUserList(){
    this.services.getUserInfo().subscribe(data=>{
      console.log(data);
      this.userList=data
    // location.reload()

    })
  }

  deleteUserList(id:any){
    this.services.deleteUserInfo(id).subscribe(data=>{
      this.getUserList()
      alert('delete successful');
      console.log(data);

    })
  }

  getUserListId(id:any){
    this.services.updateUserInfo(id).subscribe(item=>{
      alert('get id');
      console.log(item);
      // this.FormComponent.userInfo.patchValue({
      //   name:item.name,
      //   number:item.number,
      //   email:item.email,
      //   age:item.age
      // })
      this.services.setPatchData(item);
      // item.reset();
      this.router.navigate(['/basic-curd/form']);

    })
    this.userList.reset();

  }

}


