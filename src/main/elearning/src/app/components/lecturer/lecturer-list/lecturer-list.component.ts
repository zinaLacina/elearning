import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LecturerService } from '../../../services/lecturer.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-lecturer-list',
  templateUrl: './lecturer-list.component.html',
  styleUrls: ['./lecturer-list.component.css']
})
export class LecturerListComponent implements OnInit {

	public lecturerList: any[]; //Course
  	public selectedLecturer : any;
	public checked: boolean;
	public allChecked: boolean;
  	public removeLecturerList: any[] = new Array();

  constructor(private lecturerService: LecturerService,
    private router:Router,private sharedService: SharedService) { }

  getLecturerList() {
        this.lecturerService.getLecturers().subscribe(
        res => {
          //console.log(res.json());
          this.lecturerList=res.json();
        },
        error => {
          console.log(error);
        }
        );
  
    }

    onSelectEdit(lecturer:any) {
      //this.router.navigate(['courses/edit', this.course.id]);
      this.selectedLecturer=lecturer;
      var r = confirm("Do you want to edit ?");
      if (r == true) {
          this.sharedService.lecturerEdit = lecturer;
          this.router.navigate(['lecturer/edit', this.selectedLecturer.id]);
      } 
    }

    //show details of a course
  onSelect(lecturer:any) {
    this.selectedLecturer=lecturer;
    this.router.navigate(['/lecturer/detail', this.selectedLecturer.id]);
    //console.log(this.selectedCourse);
  }

  updateSelected(checked: boolean) {
  if(checked) {
    this.allChecked = true;
    this.removeLecturerList= this.lecturerList.slice();
  } else {
    this.allChecked=false;
    this.removeLecturerList=[];
  }
}

updateRemoveCourseList(checked:boolean, lecturer:any) {
  if(checked) {
    this.removeLecturerList.push(lecturer);
  } else {
    this.removeLecturerList.splice(this.removeLecturerList.indexOf(lecturer), 1);
  }
}

delete(lecturer:any){
     this.selectedLecturer=lecturer;
      var result = confirm("Do you want to delete ?");
      if(result) {
          this.lecturerService.sendLecturer(lecturer.id).subscribe(
            res => {
              //console.log(res);
              this.getLecturerList();
            },
            err => {
              console.log(err);
            }
            );
        }
   }
 removeSelectedLectures() {
   var r = confirm("Do you want to delete ?");
      if (r == true) {
          for (let lecturer of this.removeLecturerList) {
          this.lecturerService.sendLecturer(lecturer.id).subscribe(
            res => {
              console.log(res)
                console.log("Delete "+lecturer.id);
            },
            err => {
              console.log(err)
            }
            );
        }
        location.reload();
      } 
 }

  ngOnInit() {
  	 this.getLecturerList();
  }

}
