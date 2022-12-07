import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(public _http:HttpClient) { }
  datafill(data:any){
    return this._http.post('http://localhost:3000/jobs',data )
  }
  public jobs: any = [];

}
