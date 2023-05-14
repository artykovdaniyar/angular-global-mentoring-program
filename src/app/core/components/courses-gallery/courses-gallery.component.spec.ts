import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { CoursesGalleryComponent } from './courses-gallery.component';
import { Course } from '../../modals/course.modal';
import { By } from '@angular/platform-browser';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesGalleryModule } from './courses-gallery.module';
import { DebugElement } from '@angular/core';
import { coursesMockData } from 'src/app/share/mocks/courses.mocks.data';

export const ButtonClickEvents = {
  left: { button: 0 },
  right: { button: 2 },
};

export function click(
  el: DebugElement | HTMLElement,
  eventObj: any = ButtonClickEvents.left
): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}

describe('CoursesGalleryComponent', () => {
  let component: CoursesGalleryComponent;
  let fixture: ComponentFixture<CoursesGalleryComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesGalleryModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesGalleryComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render courses list', () => {
    component.courses = coursesMockData;
    fixture.detectChanges();
    const coursesListElement = el.query(By.directive(CoursesListComponent));
    expect(coursesListElement.componentInstance.courses).toEqual(
      coursesMockData
    );
  });

  it('should handle search courses', () => {
    const searchButton = el.query(By.css('.btn-submit'));
    spyOn(component, 'searchCoursesHandler');

    searchButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.searchCoursesHandler).toHaveBeenCalled();
  });

  it('should handle load more courses', () => {
    spyOn(component, 'loadMoreHandler');
    const loadMoreButton = el.query(By.css('button.more-btn'));
    loadMoreButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.loadMoreHandler).toHaveBeenCalled();
  });

  it('should handle edit course', () => {
    spyOn(component, 'editCourseHandler');
    const coursesListElement = el.query(By.directive(CoursesListComponent));
    coursesListElement.triggerEventHandler('onEdit', 1);
    fixture.detectChanges();
    expect(component.editCourseHandler).toHaveBeenCalledWith(1);
  });

  it('should handle delete course', () => {
    spyOn(component, 'deleteCourseHandler');
    const coursesListElement = el.query(By.directive(CoursesListComponent));
    coursesListElement.triggerEventHandler('onDelete', 1);
    fixture.detectChanges();
    expect(component.deleteCourseHandler).toHaveBeenCalledWith(1);
  });
});
