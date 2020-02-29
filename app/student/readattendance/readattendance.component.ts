import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-readattendance',
  templateUrl:
   './readattendance.component.html',
  styleUrls: ['./readattendance.component.css']
})
export class ReadattendanceComponent implements OnInit {
  studentdata=this.cs.loggedinUser;
  loggedstudentid=this.studentdata.studentid;
  attendencedata;
  constructor(private cs:CommonService) { }

  ngOnInit() {
    this.cs.loggedStudentData(this.loggedstudentid).subscribe((res)=>{
      if(res['message']=="no data found with given student id")
      {
        alert("no data found with given student id")
      }
      else
      {
        this.attendencedata=res["message"]
        console.log(this.attendencedata)
      }
    })

  }

}
