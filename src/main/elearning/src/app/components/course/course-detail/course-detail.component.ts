import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { CourseService } from '../../../services/course.service';
import {SemesterService} from '../../../services/semesterService';
import {Course} from '../../../models/course';
import {Weekday} from '../../../models/weekday';
import {TimeSlot} from '../../../models/timeslot';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
	//Declaration of variable
	  public weeks: string[];
	  public slots:string[];
  	public course:any;
  	public courseId: number;
  	public participants:any;

  
  constructor(private courseService:CourseService,
  	private route:ActivatedRoute, private router:Router,private weekdays: Weekday,
  	private slot:TimeSlot, private semesterservice:SemesterService,private sharedService: SharedService) { }

  onSelect(course:any) {
      //this.router.navigate(['courses/edit', this.course.id]);
      // .then(s => location.reload())
      var r = confirm("Do you want to edit ?");
		if (r == true) {
        this.sharedService.courseEdit = course;
		    this.router.navigate(['courses/edit', this.course.id]);
		} 
    }

    getData(){
    	this.route.params.forEach((params: Params) => {
    		this.courseId = Number.parseInt(params['id']);
    	});

    	this.courseService.getDelivery(this.courseId).subscribe(
    		res => {
          		//console.log(res.json());
    			this.course = res.json();
    		},
    		error => {
    			console.log(error);
    		}
    	);

    	//get The participant
    	this.courseService.getParticipants(this.courseId).subscribe(
    		res=>{
    			console.log(res.json());
    			this.participants = res.json();
    		},
    		error=>{
    			console.log(error);
    		}
    		);
    }

    ngOnInit() {    	
    	//initialize the week day
      this.weeks = this.weekdays.weekdays;
      //initialize timeslot
      this.slots = this.slot.timeslot;
    	this.getData();

    }

}
