import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

const EXCEL_TYPE = 'application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
 
  constructor(private cs:CommonService) { }
  data:any=[];
  data1;
  commonterm;
  searchTerm;
  

  ngOnInit() {
    
    this.data1=this.cs.toCommon();
    this.cs.toSer=this.data1;
    this.cs.doRead(this.data1).subscribe((dataArray)=>
    {
      this.data=dataArray["message"]
    })
  }

  saveForm(obj)
  {
    console.log(obj)
    
    this.cs.doSave(obj).subscribe((obj)=>
    {
      if(obj["message"]=="success")
      {
        alert ("saved successfully")
        this.ngOnInit();
      }
      else if(obj['message']=="generateid first")
      {
        alert("generate id first")
      }
    })
  }

  updateForm(obj)
  {
    console.log(obj);
    this.cs.doUpdate(obj).subscribe((data)=>
    {
      if(data["message"]=="no data found")
      {
        alert ("data not existed")
      }
      else if(data["message"]=="success")
      {
        alert("updated successfully")
        this.ngOnInit();
      }
    })
  }
ed:any=[]
editUpdate(data)
{
  console.log(data)
  this.ed=data;
}

deleteData(obj)
{
  var c=confirm("are you sure to delete")
  if (c==true)
  {
    this.cs.doDelete(obj).subscribe((obj)=>
    {
      if(obj["message"]="success")
      {
        alert("deleted successfully")
        this.ngOnInit()
      }
      else
      {
        console.log("error in delete")
      }
    })
  }
}

//read year wise data
obj={'yearofjoin':0,'departments':''}
changeYear(yearofjoin:any)
{
  if(yearofjoin==='All')
  {
    this.ngOnInit()
  }
  else{
    console.log(yearofjoin)
    this.obj.yearofjoin=yearofjoin;
    this.obj.departments=this.data1;
    console.log(this.obj);
    this.cs.sortByYear(this.obj).subscribe((dataArray)=>
    {
      if(dataArray["message"]==="nodatafound")
      {
        alert("no data found")
      }
      else{
        console.log(dataArray["message"]);
        this.data=dataArray["message"]
        console.log(this.data1);
        //this.ngOnInit();
      }
    })
  }
}


public downloadFile(): void {
const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames:
['data'] };
const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type:
'array' });
this.saveAsExcelFile(excelBuffer, 'excelFileName');
}
private saveAsExcelFile(buffer: any, fileName: string): void {
  const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() +
  EXCEL_EXTENSION);
  
}

downloadPDF(){
  var today;
  const doc = new jsPDF()
  var col=["firstname","lastname","gender","phonenumber","emailid","departments","postaladdress","yearofjoin","ssc","inter","studentid","date"]
  var rows=[];
  this.data.forEach(element=>{
  let firstname=element.firstname;
  let lastname=element.lastname;
  let gender=element.gender;
  let phonenumber=element.phonenumber;
  let emailid=element.emailid;
  let departments=element.departments;
  let postaladdress=element.postaladdress;
  let yearofjoin=element.yearofjoin;
  let ssc=element.ssc;
  let inter=element.inter;
  let studentid=element.studentid;
  //let date=today.getDate();
  let temp=[firstname,lastname,gender,phonenumber,emailid,departments,postaladdress,yearofjoin,ssc,inter,studentid]
  rows.push(temp)
  })
  doc.autoTable(col,rows,{
  theme:'grid'
  })
  doc.save('first.pdf')
 }

}