import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TutorialpublishComponent } from './tutorialpublish.component';

describe('TutorialpublishComponent', () => {
  let component: TutorialpublishComponent;
  let fixture: ComponentFixture<TutorialpublishComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialpublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialpublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
