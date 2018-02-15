import { Routes } from '@angular/router';

import { HomeComponent }   from './components/home/home.component';
import { UserComponent }   from './components/user/user.component';
import { CourseListComponent }   from './components/course/course-list/course-list.component';
import { CourseAddComponent }   from './components/course/course-add/course-add.component';
import { UsersComponent }   from './components/users/users.component';
import { MapsComponent }   from './components/maps/maps.component';
import {LoginComponent} from './components/login/login.component';
import {CourseDetailComponent} from './components/course/course-detail/course-detail.component';
import {CourseEditComponent} from './components/course/course-edit/course-edit.component';
import { LecturerListComponent } from './components/lecturer/lecturer-list/lecturer-list.component';
import { LecturerAddComponent } from './components/lecturer/lecturer-add/lecturer-add.component';
import { LecturerEditComponent } from './components/lecturer/lecturer-edit/lecturer-edit.component';
import { LecturerDetailComponent } from './components/lecturer/lecturer-detail/lecturer-detail.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { StudentDetailComponent } from './components/student/student-detail/student-detail.component';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'courses',
        component: CourseListComponent,
        children: [

        ]
    },
    {
        path: 'courses/addcourse',
        component: CourseAddComponent
    },
    {
        path: 'courses/detail/:id',
        component: CourseDetailComponent
    },
    {
        path: 'courses/edit/:id',
        component: CourseEditComponent
    },
    {
        path: 'lecturer',
        component: LecturerListComponent
    },
     {
        path: 'lecturer/addlecturer',
        component: LecturerAddComponent
    },
    {
        path: 'lecturer/detail/:id',
        component: LecturerDetailComponent
    },
    {
        path: 'lecturer/edit/:id',
        component: LecturerEditComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },

    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'student',
        component: StudentListComponent
    },
    {
        path: 'student/addstudent',
        component: StudentAddComponent
    },
    {
        path: 'student/detail/:id',
        component: StudentDetailComponent
    },
    {
        path: 'student/edit/:id',
        component: StudentEditComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]
