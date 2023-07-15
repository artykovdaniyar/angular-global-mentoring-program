import { Course } from './../../../modals/course.modal';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  faClock,
  faCalendarDays,
  faPen,
  faTrash,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
})
export class CoursesItemComponent {
  faClock = faClock;
  faCalendarDays = faCalendarDays;
  faPen = faPen;
  faTrash = faTrash;
  faStar = faStar;
  @Input() course!: Course;

  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();

  deleteCourse(id: number) {
    this.onDelete.emit(id);
  }

  editCourse(id: number) {
    this.onEdit.emit(id);
  }
}
