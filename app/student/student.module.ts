import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { ReadmarksComponent } from './readmarks/readmarks.component';
import { ReadattendanceComponent } from './readattendance/readattendance.component';


@NgModule({
  declarations: [StudentprofileComponent, ReadmarksComponent, ReadattendanceComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
