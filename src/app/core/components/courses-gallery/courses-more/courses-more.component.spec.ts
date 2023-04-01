import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesMoreComponent } from './courses-more.component';

describe('CoursesMoreComponent', () => {
  let component: CoursesMoreComponent;
  let fixture: ComponentFixture<CoursesMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
