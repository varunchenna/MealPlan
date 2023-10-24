import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieterFormComponent } from './dieter-form.component';

describe('DieterFormComponent', () => {
  let component: DieterFormComponent;
  let fixture: ComponentFixture<DieterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DieterFormComponent]
    });
    fixture = TestBed.createComponent(DieterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
