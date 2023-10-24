import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogElementsExampleComponent } from './dialog-elements-example.component';

describe('DialogElementsExampleComponent', () => {
  let component: DialogElementsExampleComponent;
  let fixture: ComponentFixture<DialogElementsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogElementsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogElementsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
