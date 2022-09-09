import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialpublishComponent } from './tutorialpublish.component';

describe('TutorialpublishComponent', () => {
  let component: TutorialpublishComponent;
  let fixture: ComponentFixture<TutorialpublishComponent>;

  beforeEach(async(() => {
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
