import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { FormBuilder } from '@angular/forms';
import { CustomService } from '../services/custom.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'city',
    'dob',
    'gender',
    'marriage',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb:FormBuilder,private service:CustomService ) {}

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   // alert('form')
  //   this.dialog.open(FormComponent, {
  //     width: '600px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }

  ngOnInit(): void {
    this.getInfo()
  }

  show:boolean=false;
  updateBtn:boolean=false;
  submitBtn:boolean=true
  toggle(){
    this.show=!this.show;

    this.submitBtn=true;
    this.updateBtn=false
    this.userInfo.reset()
  }

  userInfo=this.fb.group({
    name:this.fb.control(''),
    surname:this.fb.control(''),
    city:this.fb.control(''),
    marriage:this.fb.control(''),
    dob:this.fb.control(''),
    gender:this.fb.control(''),
    id:this.fb.control(null)

  })

  submit(){
    console.log(this.userInfo.value);
    this.service.PostData(this.userInfo.value).subscribe(item=>{
      console.log('post:'+item);
    this.getInfo()
    this.userInfo.reset()
      
    })

    this.show=false
    // location.reload()
  }

  // delete
  deleteData(id:any){
    console.log(id);

    this.service.DeleteData(id).subscribe(item=>{
    console.log(id);
    console.log(item);
    this.getInfo()

    })
    
  }

  //get id
  getId(id:any){
    this.service.GetId(id).subscribe(item=>{
      console.log(item);
      // this.userInfo=item
      var data=item;
      console.log(data);
      this.userInfo.setValue({
        id:data.id,
        name:data.name,
        surname:data.surname,
        city:data.city,
        marriage:data.marriage,
        dob:data.dob,
        gender:data.gender

      });
      this.show=true;
      this.submitBtn=false;
      this.updateBtn=true;
    })
  }

  // update data
  update(){
    this.service.UpdateData(this.userInfo.value).subscribe(item=>{
      console.log(item);
      this.getInfo()
      this.userInfo.reset()
    })
    this.show=false
  }


  // services get
  getInfo(){
    this.service.GetData().subscribe(res=>{
      this.dataSource= new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator = this.paginator;
      // next:(data)=>{
      //   this.dataSource= new MatTableDataSource(data);
      //   this.dataSource.sort=this.sort;
      //   this.dataSource.paginator = this.paginator;
      // },
      // error:console.log,
      
    })
  }

  //material function
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
