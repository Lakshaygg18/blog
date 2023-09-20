import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  selectData :any;
  constructor(){

  }

  ngOnInit(): void {
   
  }
  datachange(data: any) {
    if (data) {
      console.log("emit data",data);
     // this.spinnerService.hide(this.loadingSpinner1);
     // this.spinnerService.hide(this.loadingSpinner2);
    }
  }

  onSelectedValueChange(obj: any) {
    this.selectData = obj;
    // console.log(this.selectData);
  }
}
