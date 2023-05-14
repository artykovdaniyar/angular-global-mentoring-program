import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Course } from 'src/app/core/modals/course.modal';
import { CoursesItemComponent } from '../courses-item/courses-item.component';
import { CoursesMoreComponent } from '../courses-more/courses-more.component';

import { CoursesListComponent } from './courses-list.component';
import { coursesMockData } from 'src/app/share/mocks/courses.mocks.data';
import { CoursesGalleryModule } from '../courses-gallery.module';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesGalleryModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Add course" button', () => {
    const addBtn = fixture.nativeElement.querySelector(
      '.courses-list__add-btn'
    );
    expect(addBtn).toBeTruthy();
    expect(addBtn.textContent).toContain('Add course');
  });

  it('should display list of courses', () => {
    component.courses = coursesMockData;
    fixture.detectChanges();

    const coursesList = fixture.nativeElement.querySelector(
      '.courses-list__list'
    );
    expect(coursesList).toBeTruthy();
    expect(coursesList.children.length).toBe(3);

    const coursesItems = coursesList.querySelectorAll('courses-item .title');
    expect(coursesItems[0].textContent).toContain(coursesMockData[0].name);
    expect(coursesItems[1].textContent).toContain(coursesMockData[1].name);
    expect(coursesItems[2].textContent).toContain(coursesMockData[2].name);
  });

  it('should emit onDelete event when deleteCourse is called', () => {
    spyOn(component.onDelete, 'emit');
    component.deleteCourse(1);
    expect(component.onDelete.emit).toHaveBeenCalledWith(1);
  });

  it('should emit onEdit event when editCourse is called', () => {
    spyOn(component.onEdit, 'emit');
    component.editCourse(2);
    expect(component.onEdit.emit).toHaveBeenCalledWith(2);
  });

  it('should emit onLoadMore event when loadMoreCourses is called', () => {
    spyOn(component.onLoadMore, 'emit');
    component.loadMoreCourses();
    expect(component.onLoadMore.emit).toHaveBeenCalled();
  });
});
