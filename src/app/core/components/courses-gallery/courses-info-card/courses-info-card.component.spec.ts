import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesInfoCardComponent } from './courses-info-card.component';

describe('CoursesInfoCardComponent', () => {
  let component: CoursesInfoCardComponent;
  let fixture: ComponentFixture<CoursesInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesInfoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
