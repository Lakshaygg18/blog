import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Reactive Forms"
  loginForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  loginUser(){
    console.warn(this.loginForm.value)
  }
  get user()
  {
    return this.loginForm.get('user');
    
  }
  get password()
  {
    return this.loginForm.get('password')
  }





  // title = "Forms Template driven"
  // userLogin(item:any){
  //   console.log(item);
  


  // title = "Two Way Binding";
  // name:any;


  // title = "Send Data child to parent component"
  // updateData(item:string){
  //   console.warn(item)
  // }

  // title = "Reusable component"
  // userdetail = [
  //   {name:'Lakshay Garg',email:'laksh@gmail.com'},
  //   {name:'Jaishika Prasad',email:'jiya@gmail.com'}
  // ]



  // title = 'Child Component'
  // data = 10;
  // updateChild(){
  //   this.data = Math.floor(Math.random()*10)
  // }

  // title = 'To Do List';
  // list:any[]=[];
  // addTask(item:string){
  //   this.list.push({id:this.list.length,name:item})
  // }
  // removeTask(id:number){
  //   console.warn(id)
  //   this.list = this.list.filter(item=>item.id!==id)
  // }
}
