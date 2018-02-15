import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder,NgForm } from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LecturerService } from '../../../services/lecturer.service';

@Component({
  selector: 'app-lecturer-add',
  templateUrl: './lecturer-add.component.html',
  styleUrls: ['./lecturer-add.component.css']
})
export class LecturerAddComponent implements OnInit {

	public lecturerAdded: boolean;
	public myform: FormGroup;

	public titles: any[];

	lecturername: FormControl;
	lecturerlab: FormControl;
	lecturercontact: FormControl;
	lectureraddress: FormControl;
	lecturertitle: FormControl;


  constructor(private lecturerService: LecturerService,
    private router:Router) { }

  createFormControls(){

  			this.lecturername= new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]);
  			this.lecturerlab = new FormControl('', [Validators.required,Validators.minLength(2)]);
  			this.lecturercontact = new FormControl('', Validators.required);
  			this.lectureraddress = new FormControl('',Validators.required);
  			this.lecturertitle = new FormControl('', Validators.required);
  	}


  	createForm(){
  		this.myform = new FormGroup({
  			lecturername:this.lecturername,
  			lecturerlab:this.lecturerlab,
  			lecturercontact:this.lecturercontact,
  			lectureraddress:this.lectureraddress,
  			lecturertitle:this.lecturertitle
  			});
  	}

  	//save a delivery and course
  onSubmit(myForm: NgForm) {
  		if(myForm.valid){
  			this.lecturerService.addLecturer(myForm.value).subscribe(
		  		res => {
		        this.lecturerAdded=true;
		        setTimeout(this.router.navigate(['/lecturer']),1000);
		  		},
		  		error => {
		  			console.log(error);
		  		}
  			);

  		}
  		
  }

  getTitleList() {
        this.lecturerService.getTitles().subscribe(
        res => {
          //console.log(res.json());
          this.titles=res.json();
        },
        error => {
          console.log(error);
        }
        );
  
    }


  ngOnInit() {
  	this.lecturerAdded=false;
  	//initialize the week day
      this.getTitleList();

      this.createFormControls();
      this.createForm();
  }

}
