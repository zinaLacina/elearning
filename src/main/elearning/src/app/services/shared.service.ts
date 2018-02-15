import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {
    public loggedIn: Subject<boolean> = new Subject<boolean>();

    //public userRole: Subject<number> = new Subject<number>();
    public courseEdit: any[];

    public lecturerEdit: any[];

    public studentEdit:any[];
}
