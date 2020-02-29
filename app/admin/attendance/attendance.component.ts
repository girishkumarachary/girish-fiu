import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendence;
  file:File;

  fileUpload(filedata){

    this.file=filedata.target.files[0];
    }
  constructor(private cs:CommonService) { }
  data:any=[]
  ngOnInit() {
    this.cs.getAttendence().subscribe((read)=>{
  if(read["message"]=="no attendence data")
  {
    alert("no attendence data ")
  }
  else
  {
    this.attendence=read['message']
    this.ngOnInit();
    console.log(this.attendence)
  }
    })
  }

  uploadAttendence(data)
  {
    let formdata = new FormData();
 formdata.append("branch",data.branch);
 formdata.append("yearofjoin",data.yearofjoin);
 formdata.append("attendence",this.file,this.file.name);
 this.cs.setAttendence(formdata).subscribe((res)=>{
 if(res["message"]=="Attendence Sheet uploaded successfully")
 {
 alert(res["message"]);
 }
 else if(res["err_desc"]=="Corupted excel file"){
 alert(res["err_desc"]);
 }

})
  }
  


}