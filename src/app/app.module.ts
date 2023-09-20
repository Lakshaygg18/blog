import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { ReusableComponent } from './reusable/reusable.component';
import { AppRoutingModule } from './app-routing.module';
import { PractiseComponent } from './practise/practise.component'; 
import { UserService } from './user.service';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
        UserDetailComponent,
    DropdownComponent,
    FilterPipe,
    ReusableComponent,
    PractiseComponent,
    CollegeComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgxMatSelectSearchModule,
    MatAutocompleteModule,
    AppRoutingModule,
   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
