import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SharedService } from '../../../services/shared.service';
import { LoginService } from '../../../services/login.service';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{

    public loggedIn = false;

    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;

    @ViewChild("navbar-cmp") button;

    constructor(location:Location, private renderer : Renderer, private element : ElementRef,
                private router:Router, private sharedService: SharedService,private loginService:LoginService
                ) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

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
    getTitle(){
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    sidebarToggle(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            setTimeout(function(){
                toggleButton.classList.add('toggled');
            },500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    /**
     * Logout function
     */
    logout() {
        this.loginService.logout().subscribe(
          res => {
            //location.reload();
            this.sharedService.loggedIn.next(false);
            localStorage.clear();
            this.router.navigate(['/login']);
            location.reload();
            //console.log("Logout success");
          },
          error => {
            console.log(error);
          }
        );
        //this.router.navigate(['/']);
      }


}
