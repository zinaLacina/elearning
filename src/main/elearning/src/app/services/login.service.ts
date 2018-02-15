import { Injectable } from '@angular/core';
import {Http, HttpModule,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  sendCredential(username: string, password: string) {
  	let url = "/rest/token";
  	let encodedCredentials = btoa(username+":"+password);
  	let basicHeader = "Basic "+encodedCredentials;
  	let headers = new Headers ({
  		'Content-Type' : 'application/x-www-form-urlencoded',
  		'Authorization' : basicHeader
  	});

  	return this.http.get(url, {headers: headers});

  }

  checkSession() {
    let url = "/rest/checkSession";

    let headers = new Headers ({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    //console.log(localStorage.getItem('xAuthToken'));

    return this.http.get(url, {headers: headers});
  }
  getCurrentUser(){
    let url = "/rest/user/getCurrentUser";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

  logout() {
    let url = "/rest/user/logout";

    let headers = new Headers ({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, '', {headers: headers});
  }
}
