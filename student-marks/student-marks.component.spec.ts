import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMarksComponent } from './student-marks.component';

describe('StudentMarksComponent', () => {
  let component: StudentsMarksComponent;
  let fixture: ComponentFixture<StudentsMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
