import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementPhotosComponent } from './engagement-photos.component';

describe('EngagementPhotosComponent', () => {
  let component: EngagementPhotosComponent;
  let fixture: ComponentFixture<EngagementPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
