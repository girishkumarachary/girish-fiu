import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-generateid',
  templateUrl: './generateid.component.html',
  styleUrls: ['./generateid.component.css']
})
export class GenerateidComponent implements OnInit {

  constructor(private cs:CommonService) { }
  data:any=[]
  ngOnInit() {
    this.cs.doReadId().subscribe((dataArray)=>
    {
      this.data=dataArray["message"]
      console.log(this.data)
    })
  }
  generateId(obj)
  {
    console.log(obj)
    obj.count=0;
    this.cs.doSaveId(obj).subscribe((obj)=>
    {
      if(obj["message"]=="success")
      {
        alert("GenerateId saved successfully")
        
        this.ngOnInit();
      }
      else if(obj["message"]=="id generated already")
      {
        alert("id generated already")
        this.ngOnInit();
      }
    })
  }
}
