import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetResultComponent } from './get-result.component';

describe('GetResultComponent', () => {
  let component: GetResultComponent;
  let fixture: ComponentFixture<GetResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetResultComponent]
    });
    fixture = TestBed.createComponent(GetResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
