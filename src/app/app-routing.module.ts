import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReusableComponent } from './reusable/reusable.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';

const routes: Routes = [
  {
    component:ReusableComponent,
    path:'reuse'
  },
  {
    component:DropdownComponent,
    path:''
  },
  {
    component:CollegeComponent,
    path:'college'
  },
  {
    component:StudentComponent,
    path:'student'
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
