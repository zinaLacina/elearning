import { Injectable } from '@angular/core';
import {Http, HttpModule,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StudentService {

  constructor(private http:Http) { }

  //Get deliveries
  getStudents(){
    let url = "/rest/student/list";
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: headers});

  }

}
