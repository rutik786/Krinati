import { Component, Input, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit{
  experience:any;
  constructor (public _taken:JobService) {}
  ngOnInit(): void { 
    this.experience = this._taken.jobs;

   }

}
