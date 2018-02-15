import { Component, OnInit } from '@angular/core';

import {Params, ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { LecturerService } from '../../../services/lecturer.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-lecturer-detail',
  templateUrl: './lecturer-detail.component.html',
  styleUrls: ['./lecturer-detail.component.css']
})
export class LecturerDetailComponent implements OnInit {

	  public lecturer:any;
  	public lecturerId: number;
  	public courses:any;

  constructor(private lecturerService:LecturerService,
  	private route:ActivatedRoute, private router:Router,private sharedService: SharedService) { }

  onSelect(lecturer:any) {
      //this.router.navigate(['courses/edit', this.course.id]);
      // .then(s => location.reload())
      var r = confirm("Do you want to edit ?");
		if (r == true) {
        this.sharedService.lecturerEdit = lecturer;
		    this.router.navigate(['lecturer/edit', this.lecturer.id]);
		} 
    }

    getData(){
    	this.route.params.forEach((params: Params) => {
    		this.lecturerId = Number.parseInt(params['id']);
    	});

    	this.lecturerService.getLecturer(this.lecturerId).subscribe(
    		res => {
          		console.log(res.json());
    			this.lecturer = res.json();
    		},
    		error => {
    			console.log(error);
    		}
    	);

    	//get The participant
    	this.lecturerService.getLecturerCourses(this.lecturerId).subscribe(
    		res=>{
    			//console.log(res.json());
    			this.courses = res.json();
    		},
    		error=>{
    			console.log(error);
    		}
    		);
    }


  ngOnInit() {
  	this.getData();
  }

}
