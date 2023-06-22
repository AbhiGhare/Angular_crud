import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomService } from 'src/app/one-page-curd/services/custom.service';
import { MeanServicesService } from '../mean-services.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateFormComponent } from '../update-form/update-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tempData!:any;

  displayedColumns: any[] = [
    '_id',
    'name', 
    'surname', 
    'age', 
    'email', 
    'phone_number', 
    'DOB', 
    'city', 
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb:FormBuilder,private service:MeanServicesService,public dialog: MatDialog ) {}

  ngOnInit(): void {
    // alert('success')
    this.getInfo()
    this.service.IdData(this.tempData)
  }

  

  getInfo(){
    this.service.getData().subscribe(res=>{
      this.dataSource= new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator = this.paginator;
      
      
    })
  }

  //delete data through ID
  deleteInfo(id:any){
    console.log(id);
    
    this.service.deleteData(id).subscribe(item=>{
      console.log(item);
      this.getInfo()
    })
  }

  //material function
  // a:any='abhi'
  applyFilter(event: Event) {
    // console.log(event.type);
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openDialog(data:any,enterAnimationDuration: string, exitAnimationDuration: string ): void {
    this.service.singleGetid(data._id).subscribe(item=>{
      this.tempData=item
      console.log('single get id data',item);
      this.service.IdData(item)

      
      
    })
    // location.reload()
    const dialogRef=this.dialog.open(UpdateFormComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
      
      
    });

    dialogRef.afterClosed().subscribe({
      next:(result)=>{
        if(result){
          // alert('hi')
          this.getInfo();
        }
      }

    })

    
    console.log(data._id);
    
    
    

    
    
  }
}
