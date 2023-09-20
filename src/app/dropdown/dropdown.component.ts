import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DropdownService } from '../dummy Api/dropdown.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent implements OnInit {
  @Output() dataEvent = new EventEmitter();
  
  university:any;
  users:any;
constructor(private dropdownService :DropdownService, private router: Router)
{
  this.dropdownService.getData().subscribe((data)=>{
    this.users = data;
    this.users = this.users.users
    // console.log("this.users",data);
  })
  
}
onOptionChange(val:any) {
  // Update the selected value in the shared service
  console.log(val)
  this.dataEvent.emit(val);
  this.router.navigateByUrl('/reuse')
}

// setSelected(user:any){
//   this.userService.setUser(user)
// }
// getUsers(){
//   this.dropdownService.getData().subscribe(resp => {
//     this.users = resp;
//     console.log("this.users",resp);
//     this.users = this.users.users
    
//   })
// }
ngOnInit(): void {
  
}
}



// changeUniversity(e:any){
  
//   console.log("event ",this.university)
//   // this.university?.setValue(e.target.value, {
//   //   onlySelf: true,
//   // });
// }

// fetchUniversity(value:string): never[] | void{
// debugger;
//   if (value === ''){
//     return this.searchResult=[];
//   }
//   this.searchResult = this.users.filter(function(uni:any){
//     return uni.university.toLowerCase().startsWith(value.toLowerCase());
//   })
//   this.toggle = false;
// }

// showDetails(uni:any){
  
//   this.selectedInput = uni;
//   this.toggle = true;
//   this.searchInput = uni.university;
//    console.log("search",this.searchInput)
// }

// onChange(event:any){
//   debugger;
//   console.log(event.target.value)
//   this.university = this.searchInput;
//   console.log("this is n", this.selectedInput)
// }


// selectUniversity(selectedUniversity: string) {
//   debugger;
//   this.university = selectedUniversity;
// }



// }
  // selectedOption: string = '';
  // options: string[] = ['marurti', 'ford', 'suzuki', 'Option 4'];

  // constructor() {}

  // // Replace this with your data source or API call for dynamic options.
  // filteredOptions = new Observable<string[]>();

  // filterOptions(event: any) {
  //   const filterValue = event.target.value.toLowerCase();
  //   this.filteredOptions = this.filterData(filterValue);
  // }

  // private filterData(value: string): Observable<string[]> {
  //   return new Observable((observer) => {
  //     observer.next(
  //       this.options.filter((option) =>
  //         option.toLowerCase().includes(value)
  //       )
  //     );
  //   });
  // }

