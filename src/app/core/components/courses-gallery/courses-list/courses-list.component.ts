import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/core/modals/course.modal';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses!: Course[];

  faPlus = faPlus;

  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();
  @Output() onLoadMore = new EventEmitter();

  deleteCourse(id: number) {
    this.onDelete.emit(id);
  }
  editCourse(id: number) {
    this.onEdit.emit(id);
  }
  loadMoreCourses() {
    this.onLoadMore.emit();
  }
}
