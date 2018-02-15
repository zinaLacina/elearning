import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Home',  icon: 'ti-panel', class: '' },
    { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
    { path: 'courses', title: 'Courses',  icon:'ti-view-list-alt', class: '' },
    { path: 'lecturer', title: 'Lecturers List',  icon:'ti-ruler-pencil', class: '' },
    { path: 'users', title: 'Users',  icon:'ti-user', class: '' },
    //{ path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
    { path: 'student', title: 'Students',  icon:'ti-bell', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public loggedIn = false;

    constructor(private router:Router, private sharedService: SharedService) { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        let token = localStorage.getItem("xAuthToken");
        //console.log("Merde "+token)
        if(token){
            this.sharedService.loggedIn.next(true);
            this.loggedIn=true;
            
        }else{
            //this.loggedIn=false;
            this.sharedService.loggedIn.next(false);
            this.router.navigate(['/login']);
        }
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
