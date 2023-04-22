import { Component } from '@angular/core';
import { Course } from '../../modals/course.modal';

@Component({
  selector: 'courses-gallery',
  templateUrl: './courses-gallery.component.html',
  styleUrls: ['./courses-gallery.component.scss'],
})
export class CoursesGalleryComponent {
  courses: Course[] = [];
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
