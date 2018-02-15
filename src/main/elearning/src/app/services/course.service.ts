import { Injectable } from '@angular/core';
import {Http, HttpModule,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Course } from '../models/course';

@Injectable()
export class CourseService {

  constructor(private http:Http) { }

  getCourses(){
    let url = "/rest/course/list";
      let headers = new Headers ({
        'Content-Type': 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });

      return this.http.get(url, {headers: headers});
  }

  sendCourse(courseId: number) {
  	let url = "/rest/course/remove";

    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, courseId, {headers: headers});
  }


  //Get course services
  getDelivery(id:number) {
  	let url = "/rest/course/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

//Get participant
  getParticipants(id:number) {
    let url = "/rest/enroll/delivery/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }


  //Add Courses
  addCourse(course:Course) {
  	let url = "/rest/course/add";

    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(course), {headers: headers});
  }

  //Get deliveries
  getDeliveries(){
    let url = "/rest/course/deliveries";
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: headers});

  }

  //update
  updateDelivery(course:any){
    let url = "/rest/course/update";

    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(course), {headers: headers});
  }

}
