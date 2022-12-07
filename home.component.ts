import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
fullName: any;
title: any;
start: any;
end: any;

  constructor (public _job:JobService,
    public route:Router) {}
  ngOnInit(): void { }

  submit(data:object):void{
console.warn(data)
this._job.datafill(data).subscribe((result)=>{
console.log(result)
});
  }

  send(){
    this.add_data();

    this.route.navigate(['/timeline'])
  }
  add_data() {
    var admin = {
      company: this.fullName,
      titleName: this.title,
      startDate: this.start,
      endDate: this.end,
    };
    this._job.jobs.push(admin);
        console.log(this._job)
  }
  

}
