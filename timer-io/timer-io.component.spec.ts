import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerIoComponent } from './timer-io.component';

describe('TimerIoComponent', () => {
  let component: TimerIoComponent;
  let fixture: ComponentFixture<TimerIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerIoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
