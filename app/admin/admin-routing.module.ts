import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { GenerateidComponent } from './generateid/generateid.component';
import { BranchComponent } from './branch/branch.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';
import { CommonComponent } from './common/common.component';


const routes: Routes = [{path:'adminprofile',component:AdminprofileComponent,children:
                       [{path:'generateid',component:GenerateidComponent},
                        {path:'common',component:CommonComponent},
                        {path:'branch',component:BranchComponent},
                        {path:'attendance',component:AttendanceComponent},
                        {path:'marks',component:MarksComponent}]}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
