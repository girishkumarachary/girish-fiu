import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-readmarks',
  templateUrl: './readmarks.component.html',
  styleUrls: ['./readmarks.component.css']
})
export class ReadmarksComponent implements OnInit {
  studentdata=this.cs.loggedinUser;
  loggedstudentid=this.studentdata.studentid;
  readmarks
  constructor(private cs:CommonService) { }
  ngOnInit() {
    this.cs.loggedStudentMarks(this.loggedstudentid).subscribe((res)=>{
      if(res['message']=="no data found with given student id")
      {
        alert("no data found with given student id")
      }
      else
      {
        this.readmarks=res["message"]
        console.log(this.readmarks
          )
      }
    })

  }
}
