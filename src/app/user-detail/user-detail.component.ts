import { Component,Input, OnInit } from '@angular/core';
import { IDepartment } from '../department.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
// @Input() item:{name:string,email:string}={name:'',email:''}
  public departments:Array<IDepartment> = [{id:1,name:'Lakshay'},{id:2,name:'Jaishika'},{id:3,name:'Jaya'}];
  public deptId!: number;
  constructor(){
  }
    ngOnInit(){

  }
 
}
