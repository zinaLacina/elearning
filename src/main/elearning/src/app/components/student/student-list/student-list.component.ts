import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import {Course} from '../../../models/course';
import {Weekday} from '../../../models/weekday';
import {TimeSlot} from '../../../models/timeslot';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public studentList: any[]; //Course
  public selectedStudent : any;
	public checked: boolean;
	public allChecked: boolean;
  public removeStudentList: Course[] = new Array();
  public week: string[];
  public time: string[];




  
  //public tableData1: CourseData;

  constructor(private studentService: StudentService,
    private router:Router,private weekdays: Weekday,private slot:TimeSlot,private sharedService: SharedService) {
      }


      getStudentList() {
        this.studentService.getStudents().subscribe(
        res => {
          console.log(res.json());
          this.studentList=res.json();
        },
        error => {
          console.log(error);
        });  
    }

    onSelectEdit(student:any) {
      //this.router.navigate(['courses/edit', this.course.id]);
      this.selectedStudent=student;
      var r = confirm("Do you want to edit ?");
      if (r == true) {
          this.sharedService.studentEdit = student;
          this.router.navigate(['student/edit', this.selectedStudent.id]);
      } 
    }


     //show details of a course
  onSelect(student:any) {
    this.selectedStudent=student;
    this.router.navigate(['/student/detail', this.selectedStudent.id]);
    //console.log(this.selectedCourse);
  }

  delete(student:any){
     this.selectedStudent=student;
      var result = confirm("Do you want to delete ?");
      /*if(result) {
          this.courseService.sendCourse(student.id).subscribe(
            res => {
              console.log(res);
              this.getCourseList();
            },
            err => {
              console.log(err);
            }
            );
        }*/
   }


	updateSelected(checked: boolean) {
	  if(checked) {
	    this.allChecked = true;
	    this.removeStudentList= this.studentList.slice();
	  } else {
	    this.allChecked=false;
	    this.removeStudentList=[];
	  }
	}

	updateRemoveCourseList(checked:boolean, student:any) {
	  if(checked) {
	    this.removeStudentList.push(student);
	  } else {
	    this.removeStudentList.splice(this.removeStudentList.indexOf(student), 1);
	  }
	}

	removeSelectedCourses() {
		   var r = confirm("Do you want to edit ?");
		      /*if (r == true) {
		          for (let course of this.removeCourseList) {
		          this.courseService.sendCourse(course.id).subscribe(
		            res => {
		              console.log(res)
		                console.log("Delete "+course.id);
		            },
		            err => {
		              console.log(err)
		            }
		            );
		        }
		        location.reload();
	 	  } */
 	}

  ngOnInit() {
  	//initialize the week day
      this.week = this.weekdays.weekdays;
      //initialize timeslot
      this.time = this.slot.timeslot;
  	this.getStudentList();
  }

}
