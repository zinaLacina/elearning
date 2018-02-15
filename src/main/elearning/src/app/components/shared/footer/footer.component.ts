import { Component, HostBinding ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';

@Component({
    moduleId: module.id,
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html'
})

export class FooterComponent{
    test : Date = new Date();


    public loggedIn = false;

    constructor(private router:Router, private sharedService: SharedService) { }

    ngOnInit() {
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

}
