import { Component } from '@angular/core';
import { Course } from '../../modals/course.modal';
import { coursesMockData } from 'src/app/share/mocks/courses.mocks.data';

@Component({
  selector: 'courses-gallery',
  templateUrl: './courses-gallery.component.html',
  styleUrls: ['./courses-gallery.component.scss'],
})
export class CoursesGalleryComponent {
  courses: Course[] = [];
  ngOnInit(): void {
    this.courses = coursesMockData;
  }

  deleteCourseHandler(id: number) {
    console.log(id);
  }

  editCourseHandler(id: number) {
    console.log(id);
  }

  searchCoursesHandler(searchTerm: string) {
    console.log(searchTerm);
  }

  loadMoreHandler() {
    console.log('Load More!');
  }
}
