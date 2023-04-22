import { Component } from '@angular/core';

@Component({
  selector: 'courses-gallery',
  templateUrl: './courses-gallery.component.html',
  styleUrls: ['./courses-gallery.component.scss'],
})
export class CoursesGalleryComponent {
  deleteCourseHandler(id: number) {
    console.log(id);
  }

  editCourseHandler(id: number) {
    console.log(id);
  }

  searchCoursesHandler(searchTerm: string) {
    console.log(searchTerm);
  }
}
