import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../../core/modals/course.modal';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(courses: Course[], search: string): Course[] {
    if (!search.trim()) return courses;
    return courses.filter((course) => {
      return (
        course.name.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase())
      );
    });
  }
}
