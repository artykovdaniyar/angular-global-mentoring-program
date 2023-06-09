import { CoursesGalleryModule } from './../courses-gallery.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from '../../../modals/course.modal';
import { CoursesItemComponent } from './courses-item.component';
import { coursesMockData } from 'src/app/share/mocks/courses.mocks.data';

describe('CoursesItemComponent', () => {
  let component: CoursesItemComponent;
  let fixture: ComponentFixture<CoursesItemComponent>;
  let deleteSpy: jasmine.Spy;
  let editSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesGalleryModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemComponent);
    component = fixture.componentInstance;
    deleteSpy = spyOn(component.onDelete, 'emit');
    editSpy = spyOn(component.onEdit, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course data', () => {
    const course: Course = coursesMockData[0];
    component.course = course;
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('.card .title');
    const lengthElement =
      fixture.nativeElement.querySelector('.card .visite-time');
    const dateElement = fixture.nativeElement.querySelector(
      '.card .creation-time'
    );
    const descriptionElement =
      fixture.nativeElement.querySelector('.card .description');
    expect(titleElement.textContent).toContain(course.name);
    expect(lengthElement.textContent).toContain(course.length);
    expect(dateElement.textContent).toContain(course.date);
    expect(descriptionElement.textContent).toContain(course.description);
  });

  it('should emit delete event on button click', () => {
    const courseId = 1;
    component.course = { id: courseId } as Course;
    fixture.detectChanges();
    const deleteButton =
      fixture.nativeElement.querySelector('.card .btn-delete');
    deleteButton.click();
    expect(deleteSpy).toHaveBeenCalledWith(courseId);
  });

  it('should emit edit event on button click', () => {
    const courseId = 1;
    component.course = { id: courseId } as Course;
    fixture.detectChanges();
    const editButton = fixture.nativeElement.querySelector('.card .btn-edit');
    editButton.click();
    expect(editSpy).toHaveBeenCalledWith(courseId);
  });
});
