//import {Classroom } from '../models/classroom';
export class Course {
  	public id: number;
  	public coursecode: string;
  	public title: string;
  	public credit: number;
  	public active: boolean;
  	public description: string;
  	public classroom: number;
  	public lecturer:number;
  	public semester:number;
  	public slot:number;
  	public week:number;
    public level:number;
}
