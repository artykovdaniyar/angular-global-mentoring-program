import {
  coursesMockData,
  sortedCoursesMockData,
} from '../../mocks/courses.mocks.data';
import { OrderByPipe } from './order-by.pipe';
import { Course } from 'src/app/core/modals/course.modal';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the courses array sorted in descending order based on date', () => {
    const courses: Course[] = [...coursesMockData];
    const sortedCourses: Course[] = pipe.transform(courses);

    expect(sortedCourses).toEqual(sortedCoursesMockData);
  });

  it('should return the same array when input is empty', () => {
    const courses: Course[] = [];

    const sortedCourses: Course[] = pipe.transform(courses);

    expect(sortedCourses).toEqual([]);
  });
});
