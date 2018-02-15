import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import {Course} from '../../../models/course';
import {Weekday} from '../../../models/weekday';
import {TimeSlot} from '../../../models/timeslot';
import { SharedService } from '../../../services/shared.service';

/*declare interface CourseData {
  headerRow: string[];
  dataRows: string[][];
}*/

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseList: any[]; //Course
  public selectedCourse : any;
	public checked: boolean;
	public allChecked: boolean;
  public removeCourseList: Course[] = new Array();
  public week: string[];
  public time: string[];




  
  //public tableData1: CourseData;

  constructor(private courseService: CourseService,
    private router:Router,private weekdays: Weekday,private slot:TimeSlot,private sharedService: SharedService) {
      }


    getCourseList() {
        this.courseService.getDeliveries().subscribe(
        res => {
          //console.log(res.json());
          this.courseList=res.json();
        },
        error => {
          console.log(error);
        }
        );
  
    }


    onSelectEdit(course:any) {
      //this.router.navigate(['courses/edit', this.course.id]);
      this.selectedCourse=course;
      var r = confirm("Do you want to edit ?");
      if (r == true) {
          this.sharedService.courseEdit = course;
          this.router.navigate(['courses/edit', this.selectedCourse.id]);
      } 
    }

    //show details of a course
  onSelect(course:any) {
    this.selectedCourse=course;
    this.router.navigate(['/courses/detail', this.selectedCourse.id]);
    //console.log(this.selectedCourse);
  }

  //Open the dialog box
  
   delete(course:any){
     this.selectedCourse=course;
      var result = confirm("Do you want to delete ?");
      if(result) {
          this.courseService.sendCourse(course.id).subscribe(
            res => {
              console.log(res);
              this.getCourseList();
            },
            err => {
              console.log(err);
            }
            );
        }
   }

updateSelected(checked: boolean) {
  if(checked) {
    this.allChecked = true;
    this.removeCourseList= this.courseList.slice();
  } else {
    this.allChecked=false;
    this.removeCourseList=[];
  }
}

updateRemoveCourseList(checked:boolean, course:Course) {
  if(checked) {
    this.removeCourseList.push(course);
  } else {
    this.removeCourseList.splice(this.removeCourseList.indexOf(course), 1);
  }
}

 removeSelectedCourses() {
   var r = confirm("Do you want to edit ?");
      if (r == true) {
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
      } 
 }

    ngOnInit(){
      //initialize the week day
      this.week = this.weekdays.weekdays;
      //initialize timeslot
      this.time = this.slot.timeslot;
      this.getCourseList();
        
    }

}
