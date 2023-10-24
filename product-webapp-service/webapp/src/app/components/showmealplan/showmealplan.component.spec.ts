import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmealplanComponent } from './showmealplan.component';

describe('ShowmealplanComponent', () => {
  let component: ShowmealplanComponent;
  let fixture: ComponentFixture<ShowmealplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmealplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowmealplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
