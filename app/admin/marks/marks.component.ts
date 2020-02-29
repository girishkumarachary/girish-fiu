import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  marks;
  file:File;

  constructor(private cs:CommonService) { }
  data:any=[]
  ngOnInit() {
    this.cs.getMarks().subscribe((read)=>{
  if(read["message"]=="no data found")
  {
    alert("no marks data ")
  }
  else
  {
    this.marks=read['message']
    this.ngOnInit();
    console.log(this.marks)
  }
    })
  }

  uploadMarks(data)
  {
    let formdata = new FormData();
 formdata.append("branch",data.branch);
 formdata.append("yearofjoin",data.yearofjoin);
 formdata.append("marks",this.file,this.file.name);
 this.cs.setMarks(formdata).subscribe((res)=>{
 if(res["message"]=="marks uploaded successfully")
 {
 alert(res["message"]);
 }
 else if(res["err_desc"]=="Corupted excel file"){
 alert(res["err_desc"]);
 }

})
  }
  
fileUpload(filedata){

this.file=filedata.target.files[0];
}

}

