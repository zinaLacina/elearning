import { Injectable } from '@angular/core';
import {Http, HttpModule,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SemesterService {

  constructor(private http:Http) { }

  getSemester(){
    let url = "/rest/semester/list";
	let headers = new Headers ({
	  'Content-Type': 'application/json',
	  'x-auth-token' : localStorage.getItem('xAuthToken')
	});

      return this.http.get(url, {headers: headers});
  }


  getClassroom(){
  	let url = "/rest/classroom/list";
      let headers = new Headers ({
        'Content-Type': 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });

      return this.http.get(url, {headers: headers});
  }

  getLecturer(){
    let url = "/rest/lecturer/list";
      let headers = new Headers ({
        'Content-Type': 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });

      return this.http.get(url, {headers: headers});
  }

 }