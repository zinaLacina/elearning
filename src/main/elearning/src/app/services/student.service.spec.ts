import { TestBed, inject } from '@angular/core/testing';
import {Http, HttpModule,Headers} from '@angular/http';
import { StudentService } from './student.service';

describe('StudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentService]
    });
  });

  it('should be created', inject([StudentService], (service: StudentService) => {
    expect(service).toBeTruthy();
  }));
});
