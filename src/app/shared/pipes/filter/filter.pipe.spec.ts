import { FilterPipe } from './filter.pipe';
import { Course } from '../../../core/modals/course.modal';
import { coursesForFilter } from './courses.mock.data';

describe('FilterPipe', () => {
  let filterPipe: FilterPipe;

  beforeEach(() => {
    filterPipe = new FilterPipe();
  });

  it('should create an instance', () => {
    expect(filterPipe).toBeTruthy();
  });

  it('should filter courses by name', () => {
    const courses: Course[] = coursesForFilter;
    const search = 'b';
    const filteredCourses = filterPipe.transform(courses, search);
    expect(filteredCourses.length).toBe(1);
    expect(filteredCourses[0].name).toBe('Course B');
  });

  it('should return all courses when search is empty', () => {
    const courses: Course[] = coursesForFilter;
    const search = '';
    const filteredCourses = filterPipe.transform(courses, search);
    expect(filteredCourses.length).toBe(3);
  });

  it('should return an empty array when no courses match the search', () => {
    const courses: Course[] = coursesForFilter;
    const search = 'dddddd';
    const filteredCourses = filterPipe.transform(courses, search);
    expect(filteredCourses.length).toBe(0);
  });
});
