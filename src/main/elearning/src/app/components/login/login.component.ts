import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'login-cmp',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public credential = {'username':'', 'password' : ''};
    public loggedIn = false;
    public error = false;

  constructor(private loginService: LoginService, private router:Router,private sharedService: SharedService) { }

  onSubmit() {
    if (this.credential.username !== '' && this.credential.password !== ''){
      this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
        res => {
          //console.log(res);
          localStorage.setItem("xAuthToken", res.json().token);
          this.loggedIn = true;
          //console.log(res.json())
          this.saveCurrentUser();
          //location.reload();
          this.sharedService.loggedIn.next(true);  
          this.router.navigate(['/home']);
          location.reload();
  
        },
        error => {
          console.log(error);
        }
      );
    }else{
      this.error = true;
    }
  }
  saveCurrentUser(){
    this.loginService.getCurrentUser().subscribe(
      res=>{
        //console.log(res.json().authorities);
        localStorage.setItem("userelearning", JSON.stringify(res.json()));
        //let roles = res.json().authorities;

      },
      error=>{
        this.sharedService.loggedIn.next(false);
        console.log(error);
      }
    );
  }

  ngOnInit() {
    //let user = localStorage.getItem("userelearning");
    //console.log(user);
    /*if(this.loggedIn==true){
      this.router.navigate(['/home']);
    }*/

    let token = localStorage.getItem("xAuthToken");
    if(token){
      this.sharedService.loggedIn.next(true);
      this.loggedIn=true;
      this.router.navigate(['/home'])
    }else{
      this.loggedIn=false;
      this.router.navigate(['/login']);
    }

  	/*this.loginService.checkSession().subscribe(
  		res => {
        console.log(res);
  			this.loggedIn=true;
        this.router.navigate(['/home']);
  		},
  		error => {
  			this.loggedIn=false;
  		}
  	);*/
  }

}
