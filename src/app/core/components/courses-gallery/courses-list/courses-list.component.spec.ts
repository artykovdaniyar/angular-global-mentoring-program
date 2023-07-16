import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesListComponent } from './courses-list.component';
import { coursesMockData } from 'src/app/shared/mocks/courses.mocks.data';
import { CoursesGalleryModule } from '../courses-gallery.module';
import { DurationPipe } from 'src/app/shared/pipes/duration/duration.pipe';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let durationPipe: DurationPipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesGalleryModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    durationPipe = new DurationPipe();
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
    const modifiedCourses = coursesMockData.map((course) => ({
      ...course,
      name: course.name.toUpperCase(),
    }));
    component.courses = modifiedCourses;
    fixture.detectChanges();

    const coursesList = fixture.nativeElement.querySelector(
      '.courses-list__list'
    );
    expect(coursesList).toBeTruthy();
    expect(coursesList.children.length).toBe(3);

    const coursesItems = coursesList.querySelectorAll('courses-item .title');
    expect(coursesItems[0].textContent).toContain(modifiedCourses[0].name);
    expect(coursesItems[1].textContent).toContain(modifiedCourses[1].name);
    expect(coursesItems[2].textContent).toContain(modifiedCourses[2].name);
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
