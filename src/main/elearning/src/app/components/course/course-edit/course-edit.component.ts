import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder,NgForm } from '@angular/forms';

import {Params, ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { CourseService } from '../../../services/course.service';
import {SemesterService} from '../../../services/semesterService';
import {Course} from '../../../models/course';
import {Weekday} from '../../../models/weekday';
import {TimeSlot} from '../../../models/timeslot';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  //Declaration of variable

  	public course:any;
  	public courseId: number;

  	public courseEdited: boolean;
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
  id:FormControl;
	coursecode: FormControl;
	coursetitle: FormControl;
	coursecredit: FormControl;
	courselevel: FormControl;
	courseclassroom: FormControl;
	courselecturer: FormControl;
	coursesemester: FormControl;
	courseweek: FormControl;
	courseslot: FormControl;
  
  constructor(private courseService:CourseService,
  	private route:ActivatedRoute, private router:Router,private weekdays: Weekday,
  	private slot:TimeSlot, private semesterservice:SemesterService,private sharedService: SharedService) { }


  createFormControls(){
  			
        this.coursecode= new FormControl(this.course.course.courseCode, [Validators.required,Validators.minLength(2),Validators.maxLength(20)]);
        this.coursetitle = new FormControl(this.course.course.title, [Validators.required,Validators.minLength(2)]);
        this.coursecredit = new FormControl(this.course.course.credit, Validators.required);
        this.courselevel = new FormControl(this.course.course.level.id, Validators.required);
        this.courseclassroom = new FormControl(this.course.classroom.id, Validators.required);
        this.courselecturer = new FormControl(this.course.lecturer.id, Validators.required);
        this.coursesemester = new FormControl(this.course.semester.id, Validators.required);
        this.courseweek = new FormControl(this.course.timeSlot, Validators.required);
        this.courseslot = new FormControl(this.course.weekDelivery, Validators.required);
        this.id = new FormControl(this.courseId, Validators.required);
  			
  	}

  	createForm(){
  		this.myform = new FormGroup({
        id:this.id,
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
    onSubmit(myForm: NgForm){
      if(myForm.valid){
        this.courseService.updateDelivery(myForm.value).subscribe(
        res => {
              //console.log(res.json());
          //this.course = res.json();
          this.courseEdited = true;
          setTimeout(this.router.navigate(['/courses']),1000);
        },
        error => {
          console.log(error);
        }
      );
        //myForm["id"] = this.courseId;
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
      this.course = this.sharedService.courseEdit;
      if(this.course){

        this.courseEdited=false;
      //initialize the week day
        this.weeks = this.weekdays.weekdays;
        //initialize timeslot
        this.slots = this.slot.timeslot;
        this.getData()
        this.createFormControls();
        this.createForm();

        this.getClassroomList();

        //initial lecturer
        this.getLecturerList();

        //semester
        this.getSemesterList();

      }else{
         this.router.navigate(['/courses']);
      }
    	

      //setTimeout(function(){this.createFormControls();this.createForm();},1000);

      
  }

}
