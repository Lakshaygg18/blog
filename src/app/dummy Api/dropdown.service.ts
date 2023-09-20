import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  
  

  constructor(private httpClient :HttpClient) { }

  getData(){
    return this.httpClient.get('https://dummyjson.com/users');
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
  }
}