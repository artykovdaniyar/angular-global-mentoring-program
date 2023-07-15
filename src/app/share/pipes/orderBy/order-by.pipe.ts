import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/core/modals/course.modal';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    if (!courses?.length) return courses;

    return courses.sort(
      (prevCourse, nextCourse) => nextCourse.date - prevCourse.date
    );
  }
}
