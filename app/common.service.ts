import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CommonService {
  bcode;

  toSer;
  toCommon()
  {
    return this.toSer
  }

  constructor(private hc:HttpClient) { }

  loggedinStatus:boolean
  loggedinUser:any;
  logout (){
    this.loggedinStatus=false
  }

  doSave(data):Observable <any>
{
  data.branchcode=this.bcode;
 return this.hc.post('/save',data)
}
doSaveId(data):Observable <any>
{
  this.bcode=data.branchcode;
  return this.hc.post('/generateid',data)
}

 doRead(obj):Observable<any>
 {
   return this.hc.get<any>(`/readAll/${obj}`)
 }

 doUpdate(data):Observable <any>
 {
   return this.hc.put('/update',data)
 }

 doDelete(obj):Observable<any>
 {
   return this.hc.delete(`/remove/ ${obj.phonenumber}`)
 }


 doReadId():Observable<any>
 {
   return this.hc.get<any>('/readAllId')
 }
 //to read year wise
 sortByYear(byyear):Observable<any>
 {
   console.log(byyear)
   return this.hc.post('/readbyyear',byyear)
 }
 studentLogin(obj):Observable<any>
 {
   return this.hc.post('/login',obj);
 }
 setAttendence(data):Observable<any>
 {
   return this.hc.post<any>('/uploadAttendence',data)
 }
 getAttendence():Observable<any>
 {
   return this.hc.get('/readbyattendence')
 }
 loggedStudentData(obj):Observable <any>
 {
   return this.hc.get(`/loggedinstudentattendence/${obj}`)
 }
 setMarks(data):Observable<any>
 {
   return this.hc.post('/uploadmarks',data)
 }
 getMarks():Observable<any>
 {
   return this.hc.get('/readbymarks')
 }
 loggedStudentMarks(obj):Observable<any>
 {
   return this.hc.get(`/loggedinstudentmarks/${obj}`)
 }
}