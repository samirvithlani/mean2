import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TutorialDetailComponent } from './tutorial-detail.component';

describe('TutorialDetailComponent', () => {
  let component: TutorialDetailComponent;
  let fixture: ComponentFixture<TutorialDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
