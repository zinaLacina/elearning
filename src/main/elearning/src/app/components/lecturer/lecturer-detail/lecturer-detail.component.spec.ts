import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerDetailComponent } from './lecturer-detail.component';

describe('LecturerDetailComponent', () => {
  let component: LecturerDetailComponent;
  let fixture: ComponentFixture<LecturerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
