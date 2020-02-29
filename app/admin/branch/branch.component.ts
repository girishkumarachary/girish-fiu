import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor(private router:Router,private cs:CommonService) { }
  k;
  ngOnInit() {
  }
  navigateToCommon(obj)
  {
    console.log(obj)
    this.k=obj;
    this.router.navigate(['/adminprofile/common'])
    this.cs.toSer=obj
  }


  
}
