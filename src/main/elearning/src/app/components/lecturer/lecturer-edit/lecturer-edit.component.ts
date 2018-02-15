import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder,NgForm } from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {Params, ActivatedRoute, Router} from '@angular/router';
import { LecturerService } from '../../../services/lecturer.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-lecturer-edit',
  templateUrl: './lecturer-edit.component.html',
  styleUrls: ['./lecturer-edit.component.css']
})
export class LecturerEditComponent implements OnInit {

	public lecturer:any;
	public lecturerEdited: boolean;
	public courseId: number;
	public myform: FormGroup;

	public titles: any[];

	id:FormControl;
	lecturername: FormControl;
	lecturerlab: FormControl;
	lecturercontact: FormControl;
	lectureraddress: FormControl;
	lecturertitle: FormControl;


  constructor(private lecturerService: LecturerService,
    private router:Router,private route:ActivatedRoute,private sharedService: SharedService) { }

  createFormControls(){

  			this.lecturername= new FormControl(this.lecturer.lecturerName, [Validators.required,Validators.minLength(2),Validators.maxLength(20)]);
  			this.lecturerlab = new FormControl(this.lecturer.lecturerLab, [Validators.required,Validators.minLength(2)]);
  			this.lecturercontact = new FormControl(this.lecturer.lecturerContact, Validators.required);
  			this.lectureraddress = new FormControl(this.lecturer.lecturerAddress,Validators.required);
  			this.lecturertitle = new FormControl(this.lecturer.title.id, Validators.required);
  			this.id = new FormControl(this.lecturer.id, Validators.required);
  	}


  	createForm(){
  		this.myform = new FormGroup({
  			id:this.id,
  			lecturername:this.lecturername,
  			lecturerlab:this.lecturerlab,
  			lecturercontact:this.lecturercontact,
  			lectureraddress:this.lectureraddress,
  			lecturertitle:this.lecturertitle
  			});
  	}

  	getData(){
    	this.route.params.forEach((params: Params) => {
    		this.courseId = Number.parseInt(params['id']);
    	});

    	/*this.courseService.getDelivery(this.courseId).subscribe(
    		res => {
          		//console.log(res.json());
    			this.course = res.json();
    		},
    		error => {
    			console.log(error);
    		}
    	);*/
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

    onSubmit(myForm: NgForm){
      if(myForm.valid){
      	//console.log(myForm.value);
        this.lecturerService.updateLecturer(myForm.value).subscribe(
        res => {
              //console.log(res.json());
          //this.course = res.json();
          this.lecturerEdited = true;
          setTimeout(this.router.navigate(['/lecturer']),1000);
        },
        error => {
          console.log(error);
        });
        //myForm["id"] = this.courseId;
      }
    }

  ngOnInit() {
  	this.lecturer = this.sharedService.lecturerEdit;
      if(this.lecturer){

        this.lecturerEdited=false;
      //initialize the week day
        
        this.getData()
        this.createFormControls();
        this.createForm();       

        //semester
        this.getTitleList();

      }else{
         this.router.navigate(['/lecturer']);
      }
  }

}
