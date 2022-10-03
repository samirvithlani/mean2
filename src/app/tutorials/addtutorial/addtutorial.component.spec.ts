import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddtutorialComponent } from './addtutorial.component';

describe('AddtutorialComponent', () => {
  let component: AddtutorialComponent;
  let fixture: ComponentFixture<AddtutorialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
