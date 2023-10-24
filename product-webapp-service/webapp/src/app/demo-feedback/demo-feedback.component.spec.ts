import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFeedbackComponent } from './demo-feedback.component';

describe('DemoFeedbackComponent', () => {
  let component: DemoFeedbackComponent;
  let fixture: ComponentFixture<DemoFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
