import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit{
  ngOnInit() {}
  name:any
  // @Input() dataEvent:any

  // ngOnInit() {
  //   // Subscribe to the event emitted from the source component
  //   this.dataService.dataEvent.subscribe((data: string) => {
  //     this.receivedData = data;
  //   });
  // }
  showcomp(value:any){
    if (value){
      this.name = value
      console.log(value)
    }
  }


  // selectedValue:any;

  // constructor(private userService:UserService){}
  // ngOnInit(){
    
  //   this.selectedValue = this.userService.getUser();
  //   console.log(this.selectedValue)
  //   }
  }

