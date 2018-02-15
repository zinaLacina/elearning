import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { FooterModule } from './components/shared/footer/footer.module';
import { NavbarModule} from './components/shared/navbar/navbar.module';
import { FixedPluginModule} from './components/shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { LoginService } from './services/login.service';
import { SharedService } from './services/shared.service';
import { CourseService } from './services/course.service';
import { SemesterService } from './services/semesterService';
import { LecturerService } from './services/lecturer.service';
import { StudentService } from './services/student.service';
import {Weekday} from './models/weekday';
import {TimeSlot} from './models/timeslot';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { MapsComponent } from './components/maps/maps.component';
import { LoginComponent } from './components/login/login.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseAddComponent } from './components/course/course-add/course-add.component';
import { CourseEditComponent } from './components/course/course-edit/course-edit.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { LecturerListComponent } from './components/lecturer/lecturer-list/lecturer-list.component';
import { LecturerAddComponent } from './components/lecturer/lecturer-add/lecturer-add.component';
import { LecturerEditComponent } from './components/lecturer/lecturer-edit/lecturer-edit.component';
import { LecturerDetailComponent } from './components/lecturer/lecturer-detail/lecturer-detail.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { StudentDetailComponent } from './components/student/student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UsersComponent,
    MapsComponent,
    LoginComponent,
    CourseListComponent,
    CourseAddComponent,
    CourseEditComponent,
    CourseDetailComponent,
    LecturerListComponent,
    LecturerAddComponent,
    LecturerEditComponent,
    LecturerDetailComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  providers: [
    LoginService,
    SharedService,
    CourseService,
    Weekday,
    TimeSlot,
    SemesterService,
    LecturerService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
