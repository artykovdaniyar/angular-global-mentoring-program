import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/core/modals/course.modal';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];
  faPlus = faPlus;

  ngOnInit(): void {
    this.courses = [
      {
        id: 8693,
        name: 'Video Course 1. Name tag',
        description:
          'Learn about where you can find course description, what information they include, how they work, and details about various components of a course description Course description report information about a univesiry of college`s classes. They`re published both in course catalogs that outline degree requerement and in course schedules that contain desciptions for all courses offered during',
        date: '9 Nav, 2018',
        length: '1h 28min',
      },
      {
        id: 4980,
        name: 'Video Course 2. Name tag',
        description:
          'Learn about where you can find course description, what information they include, how they work, and details about various components of a course description Course description report information about a univesiry of college`s classes. They`re published both in course catalogs that outline degree requerement and in course schedules that contain desciptions for all courses offered during',
        date: '9 Nav, 2018',
        length: '1h 28min',
      },
      {
        id: 8693,
        name: 'Video Course 3. Name tag',
        description:
          'Learn about where you can find course description, what information they include, how they work, and details about various components of a course description Course description report information about a univesiry of college`s classes. They`re published both in course catalogs that outline degree requerement and in course schedules that contain desciptions for all courses offered during',
        date: '9 Nav, 2018',
        length: '1h 28min',
      },
    ];
  }
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();

  deleteCourse(id: number) {
    this.onDelete.emit(id);
  }
  editCourse(id: number) {
    this.onEdit.emit(id);
  }
}
