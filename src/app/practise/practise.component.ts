import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
  allownewserver = false;
  serverCreationStatus = 'No server was created'
  serverName = ''

  constructor(){
    setTimeout(()=>{
      this.allownewserver = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'server was created'
  }
  OnUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {
    
  }
}
