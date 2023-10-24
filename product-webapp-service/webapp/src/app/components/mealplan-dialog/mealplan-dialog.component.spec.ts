import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealplanDialogComponent } from './mealplan-dialog.component';

describe('MealplanDialogComponent', () => {
  let component: MealplanDialogComponent;
  let fixture: ComponentFixture<MealplanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealplanDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealplanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
