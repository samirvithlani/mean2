import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TutorialListComponent } from './tutorial-list.component';

describe('TutorialListComponent', () => {
  let component: TutorialListComponent;
  let fixture: ComponentFixture<TutorialListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
