import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMealplanDialogComponent } from './generate-mealplan-dialog.component';

describe('GenerateMealplanDialogComponent', () => {
  let component: GenerateMealplanDialogComponent;
  let fixture: ComponentFixture<GenerateMealplanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateMealplanDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateMealplanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
