import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetutorialComponent } from './updatetutorial.component';

describe('UpdatetutorialComponent', () => {
  let component: UpdatetutorialComponent;
  let fixture: ComponentFixture<UpdatetutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
