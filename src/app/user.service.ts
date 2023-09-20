import { Injectable } from '@angular/core';
import { Subject , Observable} from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class UserService {

  private selectedValue: string='';

  setUser(value:any){
    this.selectedValue=value;
    // console.log(this.selectedValue)
  }

  getUser(){
    return this.selectedValue;
  }

}