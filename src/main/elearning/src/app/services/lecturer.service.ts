import { Injectable } from '@angular/core';
import {Http, HttpModule,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LecturerService {

  constructor(private http:Http) { }


  sendLecturer(lecturerId: number) {
  	let url = "/rest/lecturer/remove";

    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, lecturerId, {headers: headers});
  }


  //Get course services
  getLecturer(id:number) {
  	let url = "/rest/lecturer/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

//Get participant
  getLecturerCourses(id:number) {
    let url = "/rest/lecturer/"+id+"/courses";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }


  //Add Courses
  addLecturer(lecturer:any) {
  	let url = "/rest/lecturer/add";

    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(lecturer), {headers: headers});
  }

  //Get deliveries
  getLecturers(){
    let url = "/rest/lecturer/list";
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: headers});

  }

  getTitles(){
     let url = "/rest/title/list";
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: headers});
  }

  //update
  updateLecturer(course:any){
    let url = "/rest/lecturer/update";

    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(course), {headers: headers});
  }

}
