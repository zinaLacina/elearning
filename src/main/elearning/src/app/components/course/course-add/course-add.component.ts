import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder,NgForm } from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import {SemesterService} from '../../../services/semesterService';
import {Weekday} from '../../../models/weekday';
import {TimeSlot} from '../../../models/timeslot';
import {Course} from '../../../models/course';


@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {


	public courseAdded: boolean;
	public myform: FormGroup;

	public weeks: string[];
	public slots:string[];
	public classrooms: any[];
	public lecturers: any[];
	public semesters: any[];
	public levels = [
	    { value: '1', display: 'Master 1' },
	    { value: '2', display: 'Master 2' }
	];

	//form conton
	coursecode: FormControl;
	coursetitle: FormControl;
	coursecredit: FormControl;
	courselevel: FormControl;
	courseclassroom: FormControl;
	courselecturer: FormControl;
	coursesemester: FormControl;
	courseweek: FormControl;
	courseslot: FormControl;



  constructor(private courseService: CourseService,
    private router:Router,private weekdays: Weekday,private slot:TimeSlot, private semesterservice:SemesterService ) { }

  	createFormControls(){

  			this.coursecode= new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]);
  			this.coursetitle = new FormControl('', [Validators.required,Validators.minLength(2)]);
  			this.coursecredit = new FormControl('', Validators.required);
  			this.courselevel = new FormControl('', Validators.required);
  			this.courseclassroom = new FormControl('', Validators.required);
  			this.courselecturer = new FormControl('', Validators.required);
  			this.coursesemester = new FormControl('', Validators.required);
  			this.courseweek = new FormControl('', Validators.required);
  			this.courseslot = new FormControl('', Validators.required);
  	}

  	createForm(){
  		this.myform = new FormGroup({
  			coursecode:this.coursecode,
  			coursetitle:this.coursetitle,
  			coursecredit:this.coursecredit,
  			courselevel:this.courselevel,
  			courseclassroom:this.courseclassroom,
  			courselecturer:this.courselecturer,
  			coursesemester:this.coursesemester,
  			courseweek:this.courseweek,
  			courseslot:this.courseslot
  			});
  	}


  //save a delivery and course
  onSubmit(myForm: NgForm) {
  		if(myForm.valid){
  			this.courseService.addCourse(myForm.value).subscribe(
		  		res => {
		        this.courseAdded=true;
		        setTimeout(this.router.navigate(['/courses']),1000)
		  		},
		  		error => {
		  			console.log(error);
		  		}
  			);

  		}
  		
  }

  //get all classrroom in the database
  getClassroomList() {
        this.semesterservice.getClassroom().subscribe(
        res => {
          //console.log(res.json());
          this.classrooms=res.json();
        },
        error => {
          console.log(error);
        }
        );
  
    }

    //get all classrroom in the database
  getLecturerList() {
        this.semesterservice.getLecturer().subscribe(
        res => {
          //console.log(res.json());
          this.lecturers=res.json();
        },
        error => {
          console.log(error);
        }
        );
  
    }

    //get all semesters in the database
  getSemesterList() {
        this.semesterservice.getSemester().subscribe(
        res => {
          //console.log(res.json());
          this.semesters=res.json();
        },
        error => {
          console.log(error);
        }
        );
  
    }

  ngOnInit() {
  	this.courseAdded=false;
  	//initialize the week day
      this.weeks = this.weekdays.weekdays;
      //initialize timeslot
      this.slots = this.slot.timeslot;
      //initialize classroom
      this.getClassroomList();

      //initial lecturer
      this.getLecturerList();

      //semester
      this.getSemesterList();

      this.createFormControls();
      this.createForm();
      
  }

}
